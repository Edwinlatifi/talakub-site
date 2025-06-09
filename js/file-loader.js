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
  loadFile('security-container', 'componentssecurity/security.html/');
  loadFile('navbar-container', 'componentsnavbar/navbar.html/');
  loadFile('header-container', 'componentsheader/header.html/');
  loadFile('price-table-container', 'componentsprice-table/price-table.html/');
  loadFile('news-box-container', 'componentsnews-box/news-box.html/');
  loadFile('articles-box-container', 'componentsarticles-box/articles-box.html/');
  loadFile('blog-box-container', 'componentsblog-box/blog-box.html/');
  loadFile('other-domains-container', 'componentsother-domains/other-domains.html/');
  loadFile('stats-box-container', 'componentsstats-box/stats-box.html/');
});
