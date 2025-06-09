// ماژول آمار بازدید
const StatsBox = {
  async init(containerId = 'stats-box-container') {
    try {
      const response = await fetch('componentsstats-box/stats-box.html/');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }
    } catch (error) {
      console.error('خطا در بارگذاری آمار بازدید:', error);
    }
  }
};

if (document.getElementById('stats-box-container')) {
  StatsBox.init();
}
