import React from 'react';
import TwitterIcon from '../icons/twitterIcon';
import AtIcon from '../icons/at-icon';

function Twitterlink({ children, href }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex w-fit items-center text-[var(--textlink-blue)] decoration-[var(--textlink-decoration)] hover:decoration-[var(--textlink-blue)] transition-colors ease-out duration-150 underline underline-offset-4"
    >
      <TwitterIcon className="w-4 h-4 mr-1" />
      <AtIcon className="w-4 h-4" />
      {children}
    </a>
  );
}

export default Twitterlink;
