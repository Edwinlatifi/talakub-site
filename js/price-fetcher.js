// ماژول PriceFetcher برای به‌روزرسانی قیمت‌های لحظه‌ای
const PriceFetcher = {
  prices: [
    { name: 'بورس', price: '3,101,955', change: '0%', time: '۹:۴۹:۳۹' },
    { name: 'انس طلا', price: '3,353.26', change: '0.01%', time: '۹:۴۹:۴۳' },
    { name: 'مثقال طلا', price: '287,110,000', change: '0%', time: '۹:۴۹:۴۳' },
    { name: 'طلا 18 عیار', price: '66,173,000', change: '0%', time: '۹:۴۹:۴۳' },
    { name: 'سکه', price: '738,850,000', change: '0%', time: '۹:۴۹:۴۳' },
    { name: 'دلار', price: '823,850', change: '0%', time: '۹:۴۹:۴۳' },
    { name: 'یورو', price: 'ناموجود', change: '0%', time: '۹:۴۹:۴۴' },
    { name: 'نفت برنت', price: '65.52', change: '0.09%', time: '۹:۴۹:۴۴' },
    { name: 'بیت کوین', price: '105,375.49', change: '0.53%', time: '۹:۴۹:۴۴' },
  ],

  init() {
    this.updatePriceTable();
    // شبیه‌سازی به‌روزرسانی لحظه‌ای
    setInterval(() => this.fetchPrices(), 60000); // هر دقیقه به‌روزرسانی
  },

  async fetchPrices() {
    try {
      // نمونه برای فراخوانی API
      const response = await fetch('/api/prices'); // جایگزین با API واقعی
      if (response.ok) {
        this.prices = await response.json();
        this.updatePriceTable();
      }
    } catch (error) {
      console.error('خطا در دریافت قیمت‌ها:', error);
      document.getElementById('price-loading').textContent = 'خطا در بارگذاری قیمت‌ها';
    }
  },

  updatePriceTable() {
    const table = document.getElementById('price-table');
    if (!table) return;

    const loading = document.getElementById('price-loading');
    loading.style.display = 'none';

    this.prices.forEach(item => {
      const row = table.querySelector(`.price-row[data-name="${item.name}"]`);
      if (row) {
        row.children[2].textContent = item.price;
        row.children[3].textContent = item.change;
        row.children[4].textContent = item.time;
      }
    });
  }
};
