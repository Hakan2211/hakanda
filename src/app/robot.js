export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/articles", "/about"],
      disallow: [],
    },
    sitemap: "https://hakanda.com/sitemap.xml",
  };
}
