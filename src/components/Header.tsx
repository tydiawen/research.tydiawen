import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
       <h1>tydiawen.com<span className="underline">research
       <Link href="/works" className="works-link">work</Link></span></h1>
    </header>
  );
};

export default Header;