import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>Home</div>
      <Link
        className="w-fit bg-blue-400  z-30 text-slate-100 hover:cursor-pointer "
        href="/articles"
      >
        Articles
      </Link>
    </div>
  );
}
