import { getBlogPostList } from '@/helpers/file-helpers';
import { format } from 'date-fns';
import Link from 'next/link';

let year = 0;
async function Blog() {
  const data = await getBlogPostList();

  return (
    <div>
      <h1>All Articles</h1>

      <ul>
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
            <>
              {printYear ? <span>{currentYear}</span> : null}
              <Link href={`/blog/posts/${post.slug}`}>
                <p>
                  {format(new Date(Date.parse(post.publishedOn)), 'MMM dd')}
                </p>
                <li key={post.slug}>{post.title}</li>
              </Link>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
