// ماژول سایر دامنه‌ها
const OtherDomains = {
  async init(containerId = 'other-domains-container') {
    try {
      const response = await fetch('/components/other-domains/other-domains.html');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری سایر دامنه‌ها:', error);
    }
  }
};

if (document.getElementById('other-domains-container')) {
  OtherDomains.init();
}
