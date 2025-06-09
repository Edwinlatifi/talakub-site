// ماژول باکس اخبار
const NewsBox = {
  async init(containerId = 'news-box-container') {
    try {
      const response = await fetch('/components/news-box/news-box.html/');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری باکس اخبار:', error);
    }
  }
};

if (document.getElementById('news-box-container')) {
  NewsBox.init();
}
