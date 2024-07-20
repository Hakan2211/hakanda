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
import { cookies } from 'next/headers';
import { COLOR_THEME_COOKIE_NAME } from '@/lib/constants';
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.description,
    openGraph: {
      type: 'article',
      title: frontmatter.title,
      description: frontmatter.abstract,
      images: [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
      url: `https://www.hakanda.com/articles/${params.postSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.abstract,
      image: frontmatter.image,
    },
  };
}

async function BlogPost({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || 'dark';

  if (!blogPostData) {
    return notFound();
  }

  const { frontmatter, content, headings } = blogPostData;

  return (
    <>
      <Head>
        <title>
          {frontmatter.title} • {BLOG_TITLE}
        </title>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:image" content={frontmatter.image} />
        <meta property="og:description" content={frontmatter.abstract} />
        <meta
          property="og:url"
          content={`https://hakanda.com/articles/${params.postSlug}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.abstract} />
        <meta name="twitter:image" content={frontmatter.image} />
      </Head>
      <Header initialTheme={theme} title={frontmatter.title} />
      <TableOfContents headings={headings} slug={frontmatter.slug} />
      <article>
        <div className={styles.wrapper}>
          <div className={styles.articles_wrapper}>
            <div className="flex flex-col gap-4  items-start mb-6">
              <Link
                className="flex items-center mb-10  text-sm gap-1 text-[var(--text-color-primary-800)] hover:text-yellow-600 transition-colors duration-300 ease-in-out  group"
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
            <div className="pb-6 pt-12 flex flex-col gap-4 text-[var(--text-color-primary-800)] leading-[1.9] tracking-[0.3px]">
              <MDXRemote source={content} components={COMPONENT_MAP} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogPost;
