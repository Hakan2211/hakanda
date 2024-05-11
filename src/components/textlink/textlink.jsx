import Link from 'next/link';
import React from 'react';

function Textlink({ text, href, as }) {
  if (as === 'link') {
    return (
      <Link
        className="w-fit text-[var(--textlink-blue)] decoration-[var(--textlink-decoration)] hover:decoration-[var(--textlink-blue)] transition-colors ease-out duration-150 underline underline-offset-4"
        href={href}
      >
        {text}
      </Link>
    );
  }
  return (
    <a
      className="w-fit text-[var(--textlink-blue)] decoration-[var(--textlink-decoration)] hover:decoration-[var(--textlink-blue)] transition-colors ease-out duration-150 underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {text}
    </a>
  );
}

export default Textlink;
