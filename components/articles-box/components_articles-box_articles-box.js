```javascript
// ماژول باکس مقالات
const ArticlesBox = {
  async init(containerId = 'articles-box-container') {
    try {
      const response = await fetch('components/articles-box/articles-box.html');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری باکس مقالات:', error);
    }
  }
};

if (document.getElementById('articles-box-container')) {
  ArticlesBox.init();
}
```
