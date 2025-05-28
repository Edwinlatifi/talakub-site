```javascript
document.getElementById('article-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // جمع‌آوری داده‌های فرم
  const newArticle = {
    id: Date.now(), // یا یه روش بهتر برای تولید id منحصربه‌فرد
    title: document.getElementById('title').value,
    excerpt: document.getElementById('excerpt').value,
    content: document.getElementById('content').value,
    image: document.getElementById('image').value || 'https://i.postimg.cc/6Q4pXg7g/placeholder.jpg',
    alt: document.getElementById('alt').value || document.getElementById('title').value,
    keywords: document.getElementById('keywords').value.split(',').map(k => k.trim()),
    date: new Date().toISOString().split('T')[0],
    url: `/article-${Date.now()}.html` // لینک ثابت برای مقاله
  };

  // لود مقالات موجود
  const existingArticles = JSON.parse(localStorage.getItem('articlesData') || '[]');
  
  // اضافه کردن مقاله جدید
  existingArticles.push(newArticle);
  
  // ذخیره در localStorage
  localStorage.setItem('articlesData', JSON.stringify(existingArticles));
  
  // اطلاع‌رسانی به کاربر
  alert('مقاله با موفقیت اضافه شد!');
  
  // پاک کردن فرم
  document.getElementById('article-form').reset();
});
```