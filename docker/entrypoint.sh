#!/bin/sh
set -e

# Hosting platforms inject the port to listen on.
sed -ri "s/^Listen [0-9]+/Listen ${PORT}/" /etc/apache2/ports.conf
sed -ri "s/<VirtualHost \*:[0-9]+>/<VirtualHost *:${PORT}>/" /etc/apache2/sites-available/000-default.conf

# Managed MySQL (e.g. Aiven) requires TLS: pass the CA certificate as DB_SSL_CA (PEM)
# or DB_SSL_CA_BASE64 (single line, easier to paste into hosting dashboards).
CA_FILE=/var/www/html/storage/db-ca.pem
if [ -n "${DB_SSL_CA_BASE64}" ]; then
    printf '%s' "${DB_SSL_CA_BASE64}" | base64 -d > "${CA_FILE}"
    export MYSQL_ATTR_SSL_CA="${CA_FILE}"
elif [ -n "${DB_SSL_CA}" ]; then
    printf '%s\n' "${DB_SSL_CA}" > "${CA_FILE}"
    export MYSQL_ATTR_SSL_CA="${CA_FILE}"
fi

php artisan migrate --force

# Platforms without shell access (e.g. Render free): provision the admin account from env.
if [ -n "${ADMIN_EMAIL}" ] && [ -n "${ADMIN_PASSWORD}" ]; then
    php artisan pbm:create-admin --name="${ADMIN_NAME:-Admin}" --email="${ADMIN_EMAIL}" --password="${ADMIN_PASSWORD}"
fi

php artisan optimize

exec apache2-foreground
