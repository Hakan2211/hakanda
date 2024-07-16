import React from 'react';
import TwitterIcon from '../icons/twitterIcon';
import AtIcon from '../icons/at-icon';

function Twitterlink({ className, children, href }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`${className} inline-flex w-fit items-baseline text-[var(--textlink-blue)] decoration-[var(--textlink-decoration)] hover:decoration-[var(--textlink-blue)] transition-colors ease-out duration-150 underline underline-offset-4 `}
    >
      <TwitterIcon className="w-4 h-4 mr-1 translate-y-1" />
      <AtIcon className="w-4 h-4 translate-y-1" />
      {children}
    </a>
  );
}

export default Twitterlink;
