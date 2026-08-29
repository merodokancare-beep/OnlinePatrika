#!/bin/bash
# ==============================================================================
# One-Click Server Setup Script for Ubuntu 22.04 / 24.04
# Sets up .NET 8, Nginx, UFW Firewall, and Certbot Free SSL
# ==============================================================================

set -e

echo ">>> [1/6] Updating system packages..."
sudo apt-get update -y && sudo apt-get upgrade -y

echo ">>> [2/6] Installing prerequisites & tools..."
sudo apt-get install -y curl wget git unzip zip nginx certbot python3-certbot-nginx ufw rsync

echo ">>> [3/6] Installing Microsoft ASP.NET Core 8 Runtime..."
sudo apt-get install -y aspnetcore-runtime-8.0 || {
    # If not found directly in apt, register Microsoft package repository:
    UBUNTU_VERSION=$(lsb_release -rs)
    wget https://packages.microsoft.com/config/ubuntu/${UBUNTU_VERSION}/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
    sudo dpkg -i packages-microsoft-prod.deb
    rm packages-microsoft-prod.deb
    sudo apt-get update -y
    sudo apt-get install -y aspnetcore-runtime-8.0
}

echo ">>> [4/6] Setting up web directory & permissions..."
sudo mkdir -p /var/www/onlinekhabarpatrika
sudo chown -R www-data:www-data /var/www/onlinekhabarpatrika
sudo chmod -R 755 /var/www/onlinekhabarpatrika

echo ">>> [5/6] Configuring UFW Firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo ">>> [6/6] Base setup completed successfully!"
echo ">>> .NET Version:"
dotnet --info | grep "Version:"
echo ">>> Nginx Status:"
sudo systemctl status nginx --no-pager
