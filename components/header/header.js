// ماژول هدر
const Header = {
  async init(containerId = 'header-container') {
    try {
      const response = await fetch('/components/header/header.html/');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری هدر:', error);
    }
  }
};

if (document.getElementById('header-container')) {
  Header.init();
}
