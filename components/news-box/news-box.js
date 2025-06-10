const NewsBox = {
  init() {
    this.setupNavigation();
    this.setupDragScroll();
    this.setupSnapScroll();
  },
  setupNavigation() {
    const scrollContainer = document.querySelector('.news-scroll');
    const prevButton = document.querySelector('.news-section .nav-button.prev');
    const nextButton = document.querySelector('.news-section .nav-button.next');
    if (scrollContainer && prevButton && nextButton) {
      const cardWidth = scrollContainer.querySelector('.news-card').offsetWidth + 20;
      prevButton.addEventListener('click', () => scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' }));
      nextButton.addEventListener('click', () => scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' }));
    }
  },
  setupDragScroll() {
    const scrollContainer = document.querySelector('.news-scroll');
    if (!scrollContainer) return;
    let isDragging = false, startX, scrollLeft;
    scrollContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      scrollContainer.classList.add('dragging');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault();
    });
    // بقیه رویدادهای drag
  },
  setupSnapScroll() {
    const newsSection = document.querySelector('.news-section');
    if (!newsSection) return;
    // document.body.style.scrollSnapType = 'y mandatory'; // کامنت‌شده
    newsSection.style.scrollSnapAlign = 'start';
    const adjustHeight = () => newsSection.style.height = `${window.innerHeight}px`;
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
  }
};
document.addEventListener('DOMContentLoaded', () => NewsBox.init());