```javascript
// ماژول PriceTable برای کامپوننت جدول قیمت قابل استفاده مجدد
const PriceTable = {
  async init(containerId = 'price-table-container') {
    try {
      // بارگذاری قالب HTML
      const response = await fetch('/price-table/price-table.html');
      if (response.ok) {
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      }

      // راه‌اندازی PriceFetcher
      if (typeof PriceFetcher !== 'undefined') {
        PriceFetcher.init();
      }
    } catch (error) {
      console.error('خطا در راه‌اندازی جدول قیمت:', error);
    }
  }
};

// راه‌اندازی خودکار در صورت وجود کانتینر
if (document.getElementById('price-table-container')) {
  PriceTable.init();
}
```
