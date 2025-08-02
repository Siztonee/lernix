FROM php:8.2-fpm-alpine

# Установка зависимостей
RUN apk update && apk add --no-cache \
    postgresql-dev \
    libzip-dev \
    zip \
    unzip

# Установка PHP расширений
RUN docker-php-ext-install pdo pdo_pgsql zip

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Рабочая директория
WORKDIR /var/www/html

# Права доступа (выполнять при запуске)
# RUN chown -R www-data:www-data /var/www/html/storage