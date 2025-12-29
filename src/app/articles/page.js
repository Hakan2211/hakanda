import { getBlogPostList } from '@/helpers/file-helpers';
import styles from './blogpage.module.css';
import React from 'react';
import BlogIntro from '@/components/blogintroduction/blogintroduction';
import ArticleLink from '@/components/articles/article-link';

export const metadata = {
  title: `Hakanda • Hakan Bilgic's articles.`,
  description:
    "Hakan Bilgic's articles. Here is a list of articles that Hakan has written.",
};

let year = 0;
async function Blog() {
  const data = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <BlogIntro />
      <section className={styles.articles_wrapper}>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium text-[var(--text-color-primary-800)]">
            All articles
          </h2>
          <ul className="gap-y-1 grid">
            {data.map((post) => {
              const currentYear = new Date(post.publishedOn).getFullYear();
              let printYear;
              if (currentYear !== year) {
                printYear = true;
                year = currentYear;
              } else {
                printYear = false;
              }
              return (
                <React.Fragment key={post.slug}>
                  <li>
                    {printYear ? (
                      <p className="py-8 text-[var(--text-color-primary-900)] font-medium text-lg">
                        {currentYear}
                      </p>
                    ) : null}

                    <ArticleLink post={post} />
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Blog;
