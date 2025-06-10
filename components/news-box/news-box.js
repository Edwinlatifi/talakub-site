const NewsBox = {
  async init(containerId = 'news-box-container') {
    try {
      const response = await fetch('components/news-box/news-box.html');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        this.setupNavigation();
        this.setupDragScroll();
        this.setupSnapScroll();
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
      const cardWidth = scrollContainer.querySelector('.article-card').offsetWidth + 20;

      prevButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });

      nextButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }
  },

  setupDragScroll() {
    const scrollContainer = document.querySelector('.articles-scroll');
    if (!scrollContainer) return;

    let isDragging = false;
    let startX, scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      scrollContainer.classList.add('dragging');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
      isDragging = false;
      scrollContainer.classList.remove('dragging');
    });

    scrollContainer.addEventListener('mouseup', () => {
      isDragging = false;
      scrollContainer.classList.remove('dragging');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('touchend', () => {
      isDragging = false;
    });

    scrollContainer.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  },

  setupSnapScroll() {
    const newsSection = document.querySelector('.news-section');
    if (!newsSection) return;

    // Enable scroll snapping for the parent container
    document.body.style.scrollSnapType = 'y mandatory';
    newsSection.style.scrollSnapAlign = 'start';

    // Adjust height dynamically to match viewport
    const adjustHeight = () => {
      newsSection.style.height = `${window.innerHeight}px`;
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);
  }
};

if (document.getElementById('news-box-container')) {
  NewsBox.init();
}