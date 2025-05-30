$timestamp = Get-Date -Format "yyyyMMddHHmmss"
$source = "C:\Users\toode\OneDrive\Desktop\talakub-site"
$destination = "F:\Talakub Backups\$timestamp.zip"
Compress-Archive -Path "$source\*" -DestinationPath $destination -Force
Write-Host "`n✅ بکاپ با موفقیت در مسیر $destination ذخیره شد."
