const NewsBox = {
  async init(containerId = 'news-box-container') {
    try {
      const response = await fetch('components/news-box/news-box.html');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        this.setupNavigation(); // Setup navigation buttons
      }
    } catch (error) {
      console.error('خطا در بارگذاری باکس اخبار:', error);
    }
  },

  setupNavigation() {
    const scrollContainer = document.querySelector('.articles-scroll');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');

    if (scrollContainer && prevButton && nextButton) {
      const cardWidth = scrollContainer.querySelector('.article-card').offsetWidth + 20; // Card width + gap

      prevButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });

      nextButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }
  }
};

if (document.getElementById('news-box-container')) {
  NewsBox.init();
}