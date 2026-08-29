#!/bin/bash
# ==============================================================================
# Automated Daily Backup Script for OnlineKhabarPatrika
# Backs up SQLite Database & Uploads to /var/backups/onlinekhabarpatrika
# ==============================================================================

BACKUP_DIR="/var/backups/onlinekhabarpatrika"
APP_DIR="/var/www/onlinekhabarpatrika"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
ARCHIVE_NAME="backup_${TIMESTAMP}.tar.gz"

mkdir -p "$BACKUP_DIR"

# Create compressed backup of DB and wwwroot uploads
if [ -f "$APP_DIR/OnlinePatrika.db" ]; then
    echo "Creating backup: $ARCHIVE_NAME"
    tar -czf "$BACKUP_DIR/$ARCHIVE_NAME" \
        -C "$APP_DIR" OnlinePatrika.db wwwroot/
    echo "Backup completed successfully at $BACKUP_DIR/$ARCHIVE_NAME"
else
    echo "Database file not found in $APP_DIR. Skipping DB backup."
fi

# Keep only the last 14 days of backups (auto-delete older ones)
find "$BACKUP_DIR" -type f -name "backup_*.tar.gz" -mtime +14 -exec rm -f {} \;
echo "Pruned backups older than 14 days."
