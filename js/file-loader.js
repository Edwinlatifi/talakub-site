```javascript
// لود دینامیک فایل‌های HTML
function loadFile(containerId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`خطا در لود فایل: ${filePath}`);
      }
      return response.text();
    })
    .then(data => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = data;
      } else {
        console.error(`کانتینر با آیدی ${containerId} یافت نشد.`);
      }
    })
    .catch(error => console.error('خطا:', error));
}

// لود کامپوننت‌ها
document.addEventListener('DOMContentLoaded', () => {
  loadFile('security-container', 'components/security/security.html');
  loadFile('navbar-container', 'components/navbar/navbar.html');
  loadFile('header-container', 'components/header/header.html');
  loadFile('price-table-container', 'components/price-table/price-table.html');
  loadFile('news-box-container', 'components/news-box/news-box.html');
  loadFile('articles-box-container', 'components/articles-box/articles-box.html');
  loadFile('blog-box-container', 'components/blog-box/blog-box.html');
  loadFile('other-domains-container', 'components/other-domains/other-domains.html');
  loadFile('stats-box-container', 'components/stats-box/stats-box.html');
});
```
