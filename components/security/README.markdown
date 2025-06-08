```markdown
# کامپوننت امنیتی

این کامپوننت تنظیمات امنیتی پایه (هدرهای امنیتی و محدود کردن دسترسی) رو برای صفحات وب‌سایت طلاکوب فراهم می‌کنه. برای استفاده در GitHub Pages بهینه شده و جایگزین تنظیمات `.htaccess` است.

## ساختار

```
components/security/
├── security.html       # متا تگ‌های امنیتی برای <head>
├── security.css        # استایل‌های امنیتی (در صورت نیاز)
├── security.js         # اسکریپت‌های امنیتی (مثل رمز یا CSP دینامیک)
├── README.md           # مستندات
```

## نصب

1. فایل‌های این پوشه رو در `components/security/` پروژه کپی کنید.
2. در `<head>` هر صفحه (مثل `index.html`)، فایل `security.html` رو لود کنید:
   ```html
   <div id="security-container"></div>
   ```
3. لینک CSS و JS رو به `<head>` اضافه کنید:
   ```html
   <link rel="stylesheet" href="components/security/security.css">
   <script src="components/security/security.js"></script>
   ```
4. در `js/file-loader.js`، لود دینامیک `security.html` رو اضافه کنید:
   ```javascript
   loadFile('security-container', 'components/security/security.html');
   ```

## استفاده

- **متا تگ‌های امنیتی**: به‌طور خودکار در `<head>` تزریق می‌شن و شامل X-Frame-Options، X-XSS-Protection، و CSP هستن.
- **رمزگذاری ساده**: برای فعال‌سازی رمز، تابع `enablePasswordProtection` رو در `security.js` از حالت کامنت خارج کنید:
  ```javascript
  enablePasswordProtection();
  ```
- **CSP دینامیک**: برای تنظیمات خاص، تابع `applyDynamicCSP` رو در `security.js` تغییر بدید.

## نکات

- رمز پیش‌فرض در `security.js` (`talakub2025`) رو با رمز امن جایگزین کنید.
- اگر از CDNهای جدید (مثل Google Fonts) استفاده می‌کنید، اونا رو به CSP در `security.html` و `security.js` اضافه کنید.
- برای تست، سایت رو با [SecurityHeaders.com](https://securityheaders.com/) بررسی کنید.

## عیب‌یابی

- **هدرها اعمال نمی‌شن**: مطمئن بشید `security.html` در `<head>` لود می‌شه.
- **خطای CSP**: منابع غیرمجاز (مثل اسکریپت‌ها) رو در کنسول مرورگر چک کنید و به CSP اضافه کنید.
- **رمز کار نمی‌کنه**: تابع `enablePasswordProtection` رو فعال کنید و رمز رو درست تنظیم کنید.
```