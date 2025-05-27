window.newsData = [
  {
    id: 3,
    title: "افزایش قیمت طلا در بازار جهانی",
    url: "/article-3.html",
    excerpt: "قیمت طلا در بازارهای جهانی طی هفته گذشته با افزایش ۵ درصدی مواجه شد.",
    content: "<p>قیمت طلا در بازارهای جهانی طی هفته گذشته با افزایش ۵ درصدی مواجه شد...</p>",
    image: "https://i.postimg.cc/kGT4cwqx/golden-bitcoin-dark-background-195056-58.gif",
    alt: "شمش طلای خالص",
    keywords: ["طلا", "بازار", "سرمایه‌گذاری"],
    date: "2024-12-03",
    category: "news"
  },
  {
    id: 4,
    title: "نمایشگاه بین‌المللی جواهرات در دبی",
    url: "/article-4.html",
    excerpt: "نمایشگاه جواهرات دبی با حضور برندهای مطرح جهانی برگزار شد.",
    content: "<p>نمایشگاه جواهرات دبی با حضور برندهای مطرح جهانی برگزار شد...</p>",
    image: "https://i.postimg.cc/VN9zg4Fd/WN662-1.gif",
    alt: "گردنبند لوکس طلایی",
    keywords: ["جواهرات", "نمایشگاه", "دبی"],
    date: "2024-12-04",
    category: "news"
  }
];

// ذخیره داده‌ها در localStorage
localStorage.setItem('newsData', JSON.stringify(window.newsData));