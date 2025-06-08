// ماژول باکس وبلاگ
const BlogBox = {
  async init(containerId = 'blog-box-container') {
    try {
      const response = await fetch('/components/blog-box/blog-box.html');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری باکس وبلاگ:', error);
    }
  }
};

if (document.getElementById('blog-box-container')) {
  BlogBox.init();
}
