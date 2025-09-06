import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="max-w-6xl mx-auto flex items-center h-16 px-4">
        <h1 className="text-xl font-semibold">
            <Link href={"/photos-feed"}>
            Demo Project</Link></h1>
      </div>
    </header>
  );
};

export default Header;
