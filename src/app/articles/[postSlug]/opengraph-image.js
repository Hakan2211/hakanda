import { loadBlogPost } from '@/helpers/file-helpers';
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);
  const { frontmatter } = blogPostData;

  return new ImageResponse(<img alt="og-image" src={frontmatter.image} />, {
    ...size,
  });
}
