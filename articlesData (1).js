window.articlesData = [
  {
    id: 1,
    title: "داستان موفقیت CarInsurance.com",
    url: "/article-1.html",
    excerpt: "دامنه CarInsurance.com در سال ۲۰۱۰ به قیمت ۴۹.۷ میلیون دلار خریداری شد.",
    content: "<p>دامنه CarInsurance.com در سال ۲۰۱۰ به قیمت ۴۹.۷ میلیون دلار خریداری شد...</p>",
    image: "https://i.postimg.cc/CK8Rgjsg/Car-Insurance.jpg",
    alt: "لوگوی CarInsurance.com",
    keywords: ["دامنه", "بیمه", "موفقیت"],
    date: "2024-12-01",
    category: "articles"
  },
  {
    id: 2,
    title: "داستان موفقیت Voice.com",
    url: "/article-2.html",
    excerpt: "دامنه Voice.com در سال ۲۰۱۹ به قیمت 3 دلار خریداری شد.",
    content: "<p>دامنه Voice.com در سال ۲۰۱۹ به قیمت ۳۰ میلیون دلار خریداری شد...</p>",
    image: "https://i.postimg.cc/9FSXQDMF/voice.jpg",
    alt: "لوگوی Voice.com",
    keywords: ["دامنه", "بلاکچین", "موفقیت"],
    date: "2024-12-02",
    category: "articles"
  }
];

// ذخیره داده‌ها در localStorage
localStorage.setItem('articlesData', JSON.stringify(window.articlesData));