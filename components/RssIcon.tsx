import Link from 'next/link';
import React from 'react';

const RSSIcon = () => {
  return (
    <Link href="https://zaidmkz.xyz/rss.xml" passHref>
      <span style={{ cursor: 'pointer' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-rss">
          <path d="M4 11a9 9 0 0 1 9 9"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <circle cx="5" cy="19" r="1"></circle>
        </svg>
      </span>
    </Link>
  );
};
export { RSSIcon };
