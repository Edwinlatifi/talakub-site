# تنظیم مسیرهای منبع و مقصد
$sourcePath = "C:\Users\toode\OneDrive\Desktop\talakub-site\data"
$backupPath = "C:\Users\toode\OneDrive\Desktop\talakub-site\Artifacts_backup"
$date = Get-Date -Format "yyyyMMdd_HHmmss"

# ساخت پوشه بک‌آپ
$backupFolder = "$backupPath\backup_$date"
New-Item -ItemType Directory -Path $backupFolder -Force

# کپی فایل‌های JSON
Copy-Item -Path "$sourcePath\articles.json" -Destination $backupFolder -ErrorAction SilentlyContinue
Copy-Item -Path "$sourcePath\news.json" -Destination $backupFolder -ErrorAction SilentlyContinue
Copy-Item -Path "$sourcePath\blog.json" -Destination $backupFolder -ErrorAction SilentlyContinue

# ثبت 로그
$logMessage = "بک‌آپ در $date انجام شد: articles.json, news.json, blog.json"
Add-Content -Path "$backupPath\backup_log.txt" -Value $logMessage