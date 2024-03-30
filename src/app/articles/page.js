import { getBlogPostList } from '@/helpers/file-helpers';
import { format } from 'date-fns';
import Link from 'next/link';
import styles from './blogpage.module.css';
import BlogIntro from '@/components/blogintroduction/blogintroduction';
import React from 'react';

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

                    <Link
                      className="rounded-lg"
                      href={`/articles/${post.slug}`}
                    >
                      <div className="flex items-start justify-start py-4 px-2 -ml-2 w-fit md:w-[45rem] rounded-lg bg-transparent text-[var(--text-color-secondary-700)] hover:text-yellow-600 hover:bg-[var(--text-color-primary-100)] duration-500   ">
                        <p className="min-w-14 mr-8 mt-[2px] text-sm text-[var(--text-color-primary-600)]">
                          {format(
                            new Date(Date.parse(post.publishedOn)),
                            'MMM dd'
                          )}
                        </p>

                        <span className="" key={post.slug}>
                          {post.title}
                        </span>
                      </div>
                    </Link>
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
