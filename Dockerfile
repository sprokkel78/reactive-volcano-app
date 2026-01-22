# Use official PHP + Apache image
FROM php:8.2-apache

# Enable Apache rewrite module (optional if you use .htaccess)
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy project files into container
COPY dist/. /var/www/html/

# Expose HTTP port
EXPOSE 80

# Start Apache in foreground
CMD ["apache2-foreground"]
