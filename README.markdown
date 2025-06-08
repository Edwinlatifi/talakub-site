```markdown
# پروژه طلاکوب

وب‌سایت فروش دامنه طلاکوب (Talakub.com) برای برندهای طلا و جواهرات. این پروژه شامل یک صفحه اصلی (`index.html`) و صفحات اضافی برای اخبار، مقالات، و وبلاگ است که با استفاده از HTML، CSS، و JavaScript توسعه یافته.

## ساختار پروژه

```
talakub-project/
├── assets/
│   ├── images/                    # تصاویر (لوگو، آیکون‌ها، پس‌زمینه)
│   ├── fonts/                     # فونت‌های Vazirmatn (Regular، Bold، Black)
├── css/                           # فایل‌های CSS
│   ├── variables.css              # متغیرهای CSS (رنگ‌ها، اندازه‌ها)
│   ├── styles.css                 # استایل‌های پایه و تایپوگرافی
│   ├── golden-border.css          # استایل‌های نوار طلایی تزئینی
│   ├── components.css             # استایل‌های کامپوننت‌های عمومی
│   ├── animations.css             # انیمیشن‌ها (مثل fade-in)
│   ├── responsive.css             # استایل‌های پاسخ‌گو برای موبایل و دسکتاپ
├── js/                            # فایل‌های JavaScript
│   ├── main.js                    # اسکریپت‌های اصلی
│   ├── file-loader.js             # لود دینامیک کامپوننت‌ها
│   ├── price-fetcher.js           # دریافت داده‌های قیمت
├── components/                    # پکیج‌های کامپوننت‌های جداگانه
│   ├── security/                  # کامپوننت امنیتی (هدرها و رمز)
│   ├── header/                    # هدر سایت
│   ├── navbar/                    # نوار ناوبری
│   ├── rotating-logo/             # لوگوی چرخشی
│   ├── news-box/                  # باکس اخبار
│   ├── articles-box/              # باکس مقالات
│   ├── blog-box/                  # باکس وبلاگ
│   ├── other-domains/             # دامنه‌های دیگر
│   ├── stats-box/                 # آمار بازدید
│   ├── price-table/               # جدول قیمت
├── config/                        # فایل‌های تنظیمات
│   ├── metadata.json              # متادیتای سایت
├── pages/                         # صفحات HTML اضافی
│   ├── news.html                  # صفحه اخبار
│   ├── articles.html              # صفحه مقالات
│   ├── blog.html                  # صفحه وبلاگ
├── index.html                     # صفحه اصلی سایت
├── README.md                      # مستندات پروژه
├── SECURITY.md                    # سیاست‌های امنیتی
```

## پیش‌نیازها

- مرورگر مدرن (کروم، فایرفاکس، سافاری)
- سرور محلی (اختیاری) مثل `live-server` یا `http-server` برای تست
- Git برای کنترل نسخه (اختیاری)

## نصب

1. پروژه را کلون کنید:
   ```bash
   git clone <آدرس-مخزن>
   ```
2. به پوشه پروژه بروید:
   ```bash
   cd talakub-project
   ```
3. فایل `index.html` را در مرورگر باز کنید یا با سرور محلی اجرا کنید:
   ```bash
   npm install -g live-server
   live-server
   ```

## توسعه

- **اضافه کردن کامپوننت جدید**:
  - یک پوشه جدید در `components/` ایجاد کنید (مثل `new-component/`) و فایل‌های `new-component.html`، `new-component.css`، و `new-component.js` رو اضافه کنید.
  - در `index.html`، لینک CSS و JS کامپوننت رو اضافه کنید.
- **به‌روزرسانی استایل‌ها**:
  - استایل‌های پایه در `css/styles.css` و متغیرها در `css/variables.css` قرار دارن.
  - استایل‌های نوار طلایی در `css/golden-border.css` مدیریت می‌شن.
- **اضافه کردن صفحه جدید**:
  - یک فایل HTML در `pages/` ایجاد کنید (مثل `new-page.html`) و از ساختار `index.html` به‌عنوان الگو استفاده کنید.
- **فونت‌ها**:
  - فونت‌های `Vazirmatn` (Regular، Bold، Black) در `assets/fonts/` قرار دارن و در `styles.css` تعریف شدن.
- **تصاویر**:
  - تمام تصاویر (مثل لوگو، آیکون‌ها) رو به `assets/images/` منتقل کنید.
  - تصویر پس‌زمینه (`backgroun22.jpg`) رو در صورت نیاز به `assets/images/` اضافه کنید و مسیر رو در `styles.css` اصلاح کنید.

## امنیت
برای اطلاعات بیشتر درباره سیاست‌های امنیتی و نحوه گزارش آسیب‌پذیری‌ها، به [SECURITY.md](SECURITY.md) مراجعه کنید.

## وابستگی‌ها

- **FontAwesome**: از CDN لود می‌شه (`index.html`).
- **Google Tag Manager**: برای آنالیتیکس (در `index.html`).
- **فونت Vazirmatn**: به‌صورت محلی در `assets/fonts/` ذخیره شده.

## نکات

- برای بهینه‌سازی تصاویر، از ابزارهایی مثل [TinyPNG](https://tinypng.com/) استفاده کنید.
- برای کاهش حجم فایل‌های CSS و JS، می‌تونید از [UglifyJS](https://github.com/mishoo/UglifyJS) یا [CSSNano](https://cssnano.co/) استفاده کنید.
- تغییرات رو با Git مستند کنید:
  ```bash
  git add .
  git commit -m "توضیح تغییرات"
  git push
  ```

## عیب‌یابی

- **فونت‌ها لود نمی‌شن**: مسیرهای `@font-face` در `styles.css` رو بررسی کنید.
- **تصاویر نمایش داده نمی‌شن**: مطمئن بشید تصاویر در `assets/images/` قرار دارن و مسیرها در HTML/CSS درستن.
- **خطای 404 برای CSS/JS**: لینک‌ها در `index.html` رو چک کنید و مطمئن بشید فایل‌ها در مسیر درستن.
- **نوار طلایی نمایش داده نمی‌شه**: مطمئن بشید `golden-border.css` در `index.html` لود شده و `<div class="golden-border-container">` در HTML وجود داره.
- **هدرهای امنیتی اعمال نمی‌شن**: مطمئن بشید `components/security/security.html` در `<head>` لود می‌شه.
```