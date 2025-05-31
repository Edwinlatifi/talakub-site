import os

domain = "https://talakub.com"
pages = [
    "/", 
    "/news.html",
    "/news-1.html",
    "/articles.html",
    "/article-1.html",
    "/blog.html"
]

sitemap_template = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{items}
</urlset>
'''

item_template = '''
  <url>
    <loc>{loc}</loc>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>'''

def create_sitemap():
    items = ""
    for page in pages:
        url = f"{domain}{page}"
        priority = "1.0" if page == "/" else "0.8"
        changefreq = "weekly" if page not in ["/news-1.html", "/article-1.html"] else "monthly"
        items += item_template.format(loc=url, changefreq=changefreq, priority=priority)
    sitemap = sitemap_template.format(items=items)
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write(sitemap)
    print("✅ sitemap.xml ساخته شد.")

if __name__ == "__main__":
    create_sitemap()
