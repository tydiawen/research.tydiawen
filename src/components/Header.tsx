'use client'; // Marking the component as a client-side component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();  // Get the current pathname

  const isWorkPage = pathname === '/work'; // Check if we are on the 'work' page
  const isHomePage = pathname === '/';    // Check if we are on the homepage

  return (
    <header className="header">
      <h1>
        <span>tydiawen.com</span>
        <span style={{ marginLeft: '8px', marginRight: '8px' }}>{' /'}</span>
        {/* Space between 'tydiawen.com' and 'research' */}
        <span>
          <Link href="/" className={`research-link ${isHomePage ? 'underline' : ''}`}>
            research
          </Link>
        </span>
        <span style={{ marginLeft: '8px', marginRight: '8px' }}>{' /'}</span>
        <span>
          <Link href="/work" className={`work-link ${isWorkPage ? 'underline' : ''}`}>
            work
          </Link>
        </span>
      </h1>
    </header>
  );
};

export default Header;
