document.addEventListener('DOMContentLoaded', () => {
  // لود کردن داده‌ها از localStorage
  const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
  const articlesData = JSON.parse(localStorage.getItem('articlesData') || '[]');
  const blogData = JSON.parse(localStorage.getItem('blogData') || '[]');

  // پیدا کردن عناصر برای نمایش
  const newsGrid = document.querySelector('#news-grid');
  const articlesGrid = document.querySelector('#articles-grid');
  const blogGrid = document.querySelector('#blog-grid');

  // تابع برای رندر مقالات
  const renderArticles = (data, container, reverse = false) => {
    if (data.length > 0) {
      container.innerHTML = data
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // مرتب‌سازی بر اساس تاریخ
        .map((article, index) => `
          <article class="article-card ${reverse && index % 2 === 1 ? 'reverse' : ''}" role="article">
            <h3>${article.title}</h3>
            <div class="article-top">
              <img src="${article.image}" alt="${article.alt}" class="article-image" loading="lazy" width="300" height="200">
              <div class="article-content">
                <p>${article.excerpt}</p>
              </div>
            </div>
            <div class="article-fullwidth">
              <p>
                ${