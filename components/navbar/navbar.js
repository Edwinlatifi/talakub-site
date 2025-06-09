// ماژول ناوبار
const Navbar = {
  async init(containerId = 'navbar-container') {
    try {
      const response = await fetch('componentsnavbar/navbar.html/');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری ناوبار:', error);
    }
  }
};

if (document.getElementById('navbar-container')) {
  Navbar.init();
}
