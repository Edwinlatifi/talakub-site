// بررسی رمز ساده برای محدود کردن دسترسی (اختیاری)
function enablePasswordProtection() {
  const password = prompt('لطفاً رمز را وارد کنید:');
  if (password !== 'talakub2025') { // رمز نمونه، قابل تغییر
    alert('دسترسی غیرمجاز!');
    window.location.href = '/';
    return false;
  }
  return true;
}
const csp = "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://cdnjs.cloudflare.com; style-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://i.postimg.cc https://talakub.com data:; connect-src 'self' https://www.google-analytics.com;";
document.querySelector('meta[http-equiv="Content-Security-Policy"]').setAttribute('content', csp);

// اعمال CSP دینامیک (در صورت نیاز به تنظیمات خاص)
function applyDynamicCSP() {
  const meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'Content-Security-Policy');
  meta.setAttribute('content', "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://cdnjs.cloudflare.com; style-src 'self'; font-src 'self'; img-src 'self' https://talakub.com; connect-src 'self' https://www.google-analytics.com;");
  document.head.appendChild(meta);
}

// اجرای تنظیمات امنیتی
document.addEventListener('DOMContentLoaded', () => {
  // فعال‌سازی رمز (فقط در توسعه)
  // enablePasswordProtection();

  // اعمال CSP دینامیک (در صورت نیاز)
  applyDynamicCSP();
});
