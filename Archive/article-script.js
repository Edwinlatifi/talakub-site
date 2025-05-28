```javascript
document.addEventListener('DOMContentLoaded', () => {
  // دریافت آیدی مقاله از URL (مثل /article-4.html -> id=4)
  const path = window.location.pathname;
  const match = path.match(/article-(\d+)\.html$/);
  const articleId = match ? parseInt(match[1]) : null;

  // لود داده‌ها از localStorage
  const articlesData = JSON.parse(localStorage.getItem('articlesData') || '[]');
  const article = articlesData.find(a => a.id === articleId);

  if (article) {
    // پر کردن متاداده‌ها
    document.querySelector('#page-title').textContent = article.title || 'طلاکوب';
    document.querySelector('#meta-description').setAttribute('content', article.excerpt || '');
    document.querySelector('#meta-keywords').setAttribute('content', article.keywords.join(', ') || '');
    document.querySelector('#canonical').setAttribute('content', window.location.href);
    document.querySelector('#og-title').setAttribute('content', article.title || '');
    document.querySelector('#og-description').setAttribute('content', article.excerpt || '');
    document.querySelector('#og-image').setAttribute('content', article.image || 'https://i.postimg.cc/2j0VMdS3/talakub8.png');
    document.querySelector('#og-url').setAttribute('content', window.location.href);
    document.querySelector('#twitter-title').setAttribute('content', article.title || '');
    document.querySelector('#twitter-description').setAttribute('content', article.excerpt || '');
    document.querySelector('#twitter-image').setAttribute('content', article.image || 'https://i.postimg.cc/2j0VMdS3/talakub8.png');

    // پر کردن هدر و هیرو
    document.querySelector('#hero-title').textContent = article.title || '';
    document.querySelector('#hero-excerpt').textContent = article.excerpt || '';

    // پر کردن محتوای مقاله
    document.querySelector('#article-image').src = article.image || 'https://i.postimg.cc/6Q4pXg7g/placeholder.jpg';
    document.querySelector('#article-image').alt = article.alt || article.title || '';
    document.querySelector('#article-title').textContent = article.title || '';
    document.querySelector('#article-excerpt').textContent = article.excerpt || '';
    document.querySelector('#article-date').textContent = article.date || '';
    document.querySelector('#article-date').setAttribute('datetime', article.date || '');
    document.querySelector('#article-body').innerHTML = article.content || '<p>محتوای مقاله در دسترس نیست.</p>';
    document.querySelector('#date-published').setAttribute('content', article.date || '');
    document.querySelector('#date-modified').setAttribute('content', article.date || '');

    // پر کردن کلمات کلیدی
    document.querySelector('#dynamic-keywords').textContent = article.keywords.join(', ') || 'بدون کلمه کلیدی';

    // پر کردن سایدبار با جدیدترین مقالات (تا ۵ مقاله)
    const latestPosts = articlesData
      .filter(a => a.id !== articleId)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
    document.querySelector('#latest-posts').innerHTML = latestPosts
      .map(post => `
        <p><a href="${post.url || '/article-' + post.id + '.html'}">${post.title}</a></p>
      `)
      .join('');
  } else {
    document.querySelector('#article-body').innerHTML = '<p>مقاله یافت نشد.</p>';
    document.querySelector('#dynamic-keywords').textContent = 'بدون کلمه کلیدی';
    document.querySelector('#page-title').textContent = 'مقاله یافت نشد - طلاکوب';
  }
});
```