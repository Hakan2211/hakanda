import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Home
      <Link href="/articles">Articles</Link>
    </div>
  );
}
