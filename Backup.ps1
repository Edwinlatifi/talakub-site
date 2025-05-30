# تنظیم مسیر پروژه و مسیر ذخیره بکاپ‌ها
$projectPath = "C:\Users\toode\OneDrive\Desktop\talakub-site"
$backupPath = "F:\Talakub Backups"

# تاریخ و زمان فعلی
$timestamp = Get-Date -Format "yyyyMMddHHmmss"

# ایجاد مسیر بکاپ در صورت نیاز
if (!(Test-Path -Path $backupPath)) {
    New-Item -ItemType Directory -Path $backupPath | Out-Null
}

# لیست شاخه‌هایی که باید بکاپ گرفته بشه
$branches = @("main", "master")

foreach ($branch in $branches) {
    Write-Host "🔁 سوئیچ به شاخه $branch ..."
    git checkout $branch

    Start-Sleep -Seconds 1

    # نام فایل بکاپ با شاخه
    $zipFile = "$backupPath\$timestamp-$branch.zip"

    # بکاپ گرفتن از همه فایل‌ها (به جز .git)
    Write-Host "📦 در حال فشرده‌سازی شاخه $branch به $zipFile ..."
    Compress-Archive -Path "$projectPath\*" -DestinationPath $zipFile -Force

    Write-Host "✅ بکاپ از شاخه $branch با موفقیت انجام شد."
}

Write-Host ""
Write-Host "🎉 همه بکاپ‌ها با موفقیت ساخته شدند."
