import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className='py-2 flex justify-between'>
      <Link href='/'>
        <a className='text-2xl font-bold text-gray-700'>
          Farhan&apos;s
          <span className='ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-500 relative inline-block'>
            <span className='relative text-white'>Blog</span>
          </span>
        </a>
      </Link>
      <button
        aria-label='Toggle Dark Mode'
        type='button'
        className='p-3 h-12 w-12 order-2 md:order-3 hidden'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle
      </button>
    </header>
  );
};

export default Header;
