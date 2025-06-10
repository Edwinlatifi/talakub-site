const ArticlesBox = {
  init() {
    this.setupNavigation();
    this.setupDragScroll();
    this.setupSnapScroll();
  },
  setupNavigation() {
    const scrollContainer = document.querySelector('.articles-scroll');
    const prevButton = document.querySelector('.articles-section .nav-button.prev');
    const nextButton = document.querySelector('.articles-section .nav-button.next');
    if (scrollContainer && prevButton && nextButton) {
      const cardWidth = scrollContainer.querySelector('.article-card').offsetWidth + 20;
      prevButton.addEventListener('click', () => scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' }));
      nextButton.addEventListener('click', () => scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' }));
    }
  },
  setupDragScroll() {
    const scrollContainer = document.querySelector('.articles-scroll');
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
    const articlesSection = document.querySelector('.articles-section');
    if (!articlesSection) return;
    // document.body.style.scrollSnapType = 'y mandatory'; // کامنت‌شده
    articlesSection.style.scrollSnapAlign = 'start';
    const adjustHeight = () => articlesSection.style.height = `${window.innerHeight}px`;
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
  }
};
document.addEventListener('DOMContentLoaded', () => ArticlesBox.init());