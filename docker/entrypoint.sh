#!/bin/sh
set -e

# Hosting platforms inject the port to listen on.
sed -ri "s/^Listen [0-9]+/Listen ${PORT}/" /etc/apache2/ports.conf
sed -ri "s/<VirtualHost \*:[0-9]+>/<VirtualHost *:${PORT}>/" /etc/apache2/sites-available/000-default.conf

# Managed MySQL (e.g. Aiven) requires TLS: pass the CA certificate content via DB_SSL_CA.
if [ -n "${DB_SSL_CA}" ]; then
    printf '%s\n' "${DB_SSL_CA}" > /var/www/html/storage/db-ca.pem
    export MYSQL_ATTR_SSL_CA=/var/www/html/storage/db-ca.pem
fi

php artisan migrate --force
php artisan optimize

exec apache2-foreground
