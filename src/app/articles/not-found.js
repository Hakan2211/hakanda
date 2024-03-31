import { BLOG_TITLE } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: `404 Not found • ${BLOG_TITLE}`,
};

function NotFound() {
  return (
    <main className="my-4 md:my-0 h-[calc(100svh-25.4rem)] p-2 flex items-center text-pretty justify-center">
      <div className=" flex flex-col gap-3 text-center text-[var(--text-color-primary-700)]">
        <p className="text-2xl leading-relaxed tracking-wide">
          Oops! This page can't be found. Looks like you've gotten lost
        </p>
        <p className="text-2xl leading-relaxed tracking-wide">
          Don't worry. Maybe you want to go to all articles and navigate from
          there.
        </p>
        <p className="text-2xl leading-relaxed tracking-wide">
          <Link
            className="underline underline-offset-4 duration-300 transition-colors ease-in-out hover:text-[var(--background-topic-blue)]"
            href="/articles"
          >
            Click here
          </Link>
          to go back to all articles.
        </p>
      </div>
    </main>
  );
}

export default NotFound;
