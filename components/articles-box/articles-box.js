const ArticlesBox = {
  init() {
    this.setupNavigation();
    this.setupDragScroll();
    this.setupWheelScroll();
    this.setupSnapScroll();
  },

  setupNavigation() {
    const scrollContainer = document.querySelector('.articles-scroll');
    const prevButton = document.querySelector('.articles-section .nav-button.prev');
    const nextButton = document.querySelector('.articles-section .nav-button.next');

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

  setupWheelScroll() {
    const scrollContainer = document.querySelector('.articles-scroll');
    if (!scrollContainer) return;

    scrollContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollContainer.scrollBy({
        left: e.deltaY * 2,
        behavior: 'smooth'
      });
    });
  },

  setupSnapScroll() {
    const articlesSection = document.querySelector('.articles-section');
    if (!articlesSection) return;

    document.body.style.scrollSnapType = 'y mandatory';
    articlesSection.style.scrollSnapAlign = 'start';

    const adjustHeight = () => {
      articlesSection.style.height = `${window.innerHeight}px`;
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ArticlesBox.init();
});