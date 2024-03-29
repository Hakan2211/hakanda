import { loadBlogPost } from '@/helpers/file-helpers';
import COMPONENT_MAP from '@/helpers/mdx-components';
import { BLOG_TITLE } from '@/lib/constants';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './postSlug.module.css';
import { format } from 'date-fns';
import Link from 'next/link';
import ArrowLeft from '@/components/icons/arrow-left';
import Header from '@/components/header/header';
import TableOfContents from '@/components/sidenav/sidenav';
import { sora } from '@/components/fonts/fonts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.description,
  };
}

async function BlogPost({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  if (!blogPostData) {
    return notFound();
  }

  const { frontmatter, content, headings } = blogPostData;

  return (
    <>
      <Header title={frontmatter.title} />
      <TableOfContents headings={headings} />
      <article>
        <div className={styles.wrapper}>
          <div className={styles.articles_wrapper}>
            <div className="flex flex-col gap-4 items-start mb-6">
              <Link
                className="flex items-center text-sm gap-1 text-[var(--text-color-primary-800)] hover:text-yellow-600 transition-colors duration-300 ease-in-out  group"
                href={'/articles'}
              >
                <ArrowLeft className="w-4 h-4 transition-transform transform group-hover:-translate-x-1 hover:ease-in-out duration-500 " />
                <span className="">All articles</span>
              </Link>

              <h1
                className={`${sora.className} text-xl tracking-wider md:text-3xl text-balance w-[100%] leading-relaxed text-[var(--text-color-primary-900)] `}
              >
                {frontmatter.title}
              </h1>
              <div className="flex gap-8 items-center">
                <p className="text-sm text-[var(--text-color-primary-500)]">
                  {format(Date.parse(frontmatter.publishedOn), 'MMMM dd, yyyy')}
                </p>
                <p>
                  {frontmatter.readTime ? (
                    <span className="text-sm text-[var(--text-color-primary-500)]">
                      {frontmatter.readTime} minutes read
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
            <div className="py-6 flex flex-col gap-4 text-[var(--text-color-primary-800)] leading-[1.9] tracking-[0.3px]">
              <MDXRemote source={content} components={COMPONENT_MAP} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogPost;
