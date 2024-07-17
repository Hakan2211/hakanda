import { loadBlogPost } from '@/helpers/file-helpers';
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};
export const alt = 'About Acme';

export default async function Image({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);
  const { frontmatter } = blogPostData;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        About Acme
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
