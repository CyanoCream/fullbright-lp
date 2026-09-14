# syntax=docker/dockerfile:1

# ---------------------------------------------------------------- PHP base
FROM php:8.4-apache AS base

COPY --from=mlocati/php-extension-installer:2 /usr/bin/install-php-extensions /usr/local/bin/
RUN install-php-extensions pdo_mysql intl bcmath pcntl zip gmp opcache \
    && a2enmod rewrite headers \
    && echo 'ServerName localhost' > /etc/apache2/conf-available/servername.conf && a2enconf servername \
    && sed -ri 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf \
    && sed -ri 's!AllowOverride None!AllowOverride All!g' /etc/apache2/apache2.conf \
    && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --no-scripts --no-autoloader

COPY . .
RUN composer dump-autoload --optimize --no-dev \
    && php artisan package:discover --ansi

# ---------------------------------------------------------------- frontend build
# Vite's Wayfinder plugin runs `php artisan wayfinder:generate`, so Node runs next to PHP.
FROM base AS assets

COPY --from=node:22-bookworm-slim /usr/local/bin/node /usr/local/bin/node
COPY --from=node:22-bookworm-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

RUN cp .env.example .env && php artisan key:generate --force \
    && npm ci --no-audit --no-fund \
    && npm run build

# ---------------------------------------------------------------- runtime
FROM base

COPY --from=assets /var/www/html/public/build public/build
COPY docker/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint \
    && chown -R www-data:www-data storage bootstrap/cache

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr \
    PORT=8080

EXPOSE 8080
ENTRYPOINT ["entrypoint"]
