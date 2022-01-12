import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='py-2'>
      <Link href='/'>
        <a className='text-2xl font-bold text-gray-700'>
          Farhan&apos;s
          <span className='ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-500 relative inline-block'>
            <span className='relative text-white'>Blog</span>
          </span>
        </a>
      </Link>
    </header>
  );
};

export default Header;
