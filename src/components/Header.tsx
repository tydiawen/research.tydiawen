'use client'; // Marking the component as a client-side component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For detecting the current page

const Header = () => {
  const pathname = usePathname();  // Get the current pathname

  const isWorkPage = pathname === '/work'; // Check if we are on the 'work' page
  const isHomePage = pathname === '/';    // Check if we are on the homepage

  return (
    <header>
      <h1>
        {/* Research link, underlined if on homepage */}
        <Link href="https://research.tydiawen.com" className={`research-link ${isHomePage ? 'underline' : ''}`}>
          Research
        </Link>
        
        {/* Separator ">" between the links */}
        <span> &gt; </span>

        {/* Work link, underlined if on work page */}
        <Link href="https://work.tydiawen.com" className={`work-link ${isWorkPage ? 'underline' : ''}`}>
          Work
        </Link>
      </h1>
    </header>
  );
};

export default Header;
