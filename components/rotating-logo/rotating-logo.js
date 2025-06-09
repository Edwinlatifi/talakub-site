// ماژول لوگوی چرخشی
const RotatingLogo = {
  async init(containerId = 'rotating-logo-container') {
    try {
      const response = await fetch('componentsrotating-logo/rotating-logo.html/');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری لوگوی چرخشی:', error);
    }
  }
};

if (document.getElementById('rotating-logo-container')) {
  RotatingLogo.init();
}
