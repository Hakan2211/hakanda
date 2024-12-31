import { getBlogPostList } from "@/helpers/file-helpers";
export default async function sitemap() {
  const baseUrl = "https://www.hakanda.com";
  const blogPosts = await getBlogPostList();

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPostPages = blogPosts.map((post) => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: post.publishedOn
      ? new Date(post.publishedOn).toISOString()
      : new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPostPages];
}
