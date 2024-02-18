import { loadBlogPost } from '@/helpers/file-helpers';
import COMPONENT_MAP from '@/helpers/mdx-components';
import { BLOG_TITLE } from '@/lib/constants';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './postSlug.module.css';
import { format } from 'date-fns';
import Link from 'next/link';
import ArrowLeft from '@/components/icons/arrow-left';
import Header from '@/components/header/header';

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);
  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.description,
  };
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <>
      <Header title={frontmatter.title} />
      <article>
        <div className={styles.wrapper}>
          <div className={styles.articles_wrapper}>
            <div className="flex flex-col gap-4 items-start mb-6">
              <Link
                className="flex items-center text-sm gap-1 hover:text-blue-600 group"
                href={'/blog'}
              >
                <ArrowLeft className="w-4 h-4 transition-transform transform group-hover:-translate-x-1 hover:ease-in-out duration-500 " />
                <span>Home</span>
              </Link>

              <h1 className="text-4xl text-balance w-[100%] leading-relaxed ">
                {frontmatter.title}
              </h1>
              <div>
                <p className="text-normal">
                  {format(Date.parse(frontmatter.publishedOn), 'MMMM dd, yyyy')}
                </p>
              </div>
            </div>
            <div className="py-6 flex flex-col gap-4 leading-[1.9] tracking-{0.3px}">
              <MDXRemote source={content} components={COMPONENT_MAP} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogPost;
