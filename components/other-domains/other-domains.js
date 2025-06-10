const OtherDomains = {
  init() {
    this.setupNavigation();
    this.setupDragScroll();
  },
  setupNavigation() {
    const scrollContainer = document.querySelector('.other-domains-scroll');
    const prevButton = document.querySelector('.other-domains-section .nav-button.prev');
    const nextButton = document.querySelector('.other-domains-section .nav-button.next');
    if (scrollContainer && prevButton && nextButton) {
      const cardWidth = scrollContainer.querySelector('.domain-card').offsetWidth + 20;
      prevButton.addEventListener('click', () => scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' }));
      nextButton.addEventListener('click', () => scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' }));
    }
  },
  setupDragScroll() {
    const scrollContainer = document.querySelector('.other-domains-scroll');
    if (!scrollContainer) return;
    let isDragging = false, startX, scrollLeft;
    scrollContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      scrollContainer.classList.add('dragging');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault();
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
      e.preventDefault();
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
  }
};
document.addEventListener('DOMContentLoaded', () => OtherDomains.init());