'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Loader } from '@/components/ui/loader';
import { format } from 'date-fns';

export default function ArticleLink({ post }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const href = `/articles/${post.slug}`;

  const handleClick = (e) => {
    e.preventDefault();
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link
      className="rounded-lg block relative"
      href={href}
      prefetch={true}
      onClick={handleClick}
    >
      <div className="flex items-start justify-start py-4 px-2 -ml-2 w-fit md:w-[45rem] rounded-lg bg-transparent text-[var(--text-color-secondary-700)] hover:text-yellow-600 hover:bg-[var(--text-color-primary-100)] duration-500">
        <p className="min-w-14 mr-8 mt-[2px] text-sm text-[var(--text-color-primary-600)]">
          {format(new Date(Date.parse(post.publishedOn)), 'MMM dd')}
        </p>

        <span className="">{post.title}</span>
        {isPending && <Loader className="ml-3 mt-1" />}
      </div>
    </Link>
  );
}
