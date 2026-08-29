#!/bin/bash
# ==============================================================================
# Automated Daily Database & Uploads Backup for OnlineKhabarPatrika
# Saves to: /var/backups/onlinekhabarpatrika
# Retention: Automatically keeps the latest 30 days of backups
# ==============================================================================

set -e

BACKUP_DIR="/var/backups/onlinekhabarpatrika"
APP_DIR="/var/www/onlinekhabarpatrika"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
ARCHIVE_NAME="backup_${TIMESTAMP}.tar.gz"
TEMP_DIR="/tmp/backup_stage_${TIMESTAMP}"
LOG_FILE="/var/log/onlinekhabarpatrika_backup.log"

log() {
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] $1" | tee -a "$LOG_FILE"
}

log ">>> Starting automated backup..."

# Ensure directories exist
mkdir -p "$BACKUP_DIR"
mkdir -p "$TEMP_DIR"

# 1. Safely copy SQLite database (including WAL and SHM if active)
if [ -f "$APP_DIR/OnlinePatrika.db" ]; then
    log "Backing up SQLite database..."
    # If sqlite3 CLI is available, perform an online transaction-safe backup:
    if command -v sqlite3 >/dev/null 2>&1; then
        sqlite3 "$APP_DIR/OnlinePatrika.db" ".backup '$TEMP_DIR/OnlinePatrika.db'"
    else
        cp -a "$APP_DIR/OnlinePatrika.db"* "$TEMP_DIR/" 2>/dev/null || true
    fi
else
    log "WARNING: OnlinePatrika.db not found in $APP_DIR"
fi

# 2. Copy uploaded images from wwwroot/uploads (if exists)
if [ -d "$APP_DIR/wwwroot/uploads" ]; then
    log "Backing up uploaded media/images..."
    mkdir -p "$TEMP_DIR/uploads"
    cp -r "$APP_DIR/wwwroot/uploads/." "$TEMP_DIR/uploads/" 2>/dev/null || true
fi

# 3. Create compressed tar.gz archive
log "Compressing backup archive: $ARCHIVE_NAME..."
tar -czf "$BACKUP_DIR/$ARCHIVE_NAME" -C "$TEMP_DIR" .

# Clean up temp staging directory
rm -rf "$TEMP_DIR"

log "SUCCESS: Backup created at $BACKUP_DIR/$ARCHIVE_NAME ($(du -h "$BACKUP_DIR/$ARCHIVE_NAME" | cut -f1))"

# 4. Prune backups older than 30 days to save disk space
OLD_COUNT=$(find "$BACKUP_DIR" -type f -name "backup_*.tar.gz" -mtime +30 | wc -l)
if [ "$OLD_COUNT" -gt 0 ]; then
    find "$BACKUP_DIR" -type f -name "backup_*.tar.gz" -mtime +30 -exec rm -f {} \;
    log "Cleaned up $OLD_COUNT backup(s) older than 30 days."
fi

log ">>> Backup process completed successfully."
