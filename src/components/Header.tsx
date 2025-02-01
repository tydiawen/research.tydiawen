'use client'; // Ensure it's a client component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import Next.js pathname hook

const Header = () => {
  const pathname = usePathname(); // Get the current URL path

  return (
    <header className="header">
      <h1>
        <span>          
        {/* ✅ Make "tydiawen.com" a clickable link */}
        <Link 
        href="/" className={`site-link ${pathname === '/' ? 'underline' : ''}`}>
          tydiawen.com
        </Link>
          </span>
        <span style={{ marginLeft: '4px', marginRight: '1px' }}>{' /'}</span>

        {/* Research link with underlining logic */}
        <span>
          <Link 
            href="/research"
            className={`research-link ${pathname === '/research' ? 'underline' : ''}`}
          >
            research
          </Link>
        </span>

        <span style={{ marginLeft: '4px', marginRight: '1px' }}>{' /'}</span>

        {/* Work link with underlining logic */}
        <span>
          <Link 
            href="/work"
            className={`work-link ${pathname === '/work' ? 'underline' : ''}`}
          >
            work
          </Link>
        </span>
      </h1>
    </header>
  );
};

export default Header;
