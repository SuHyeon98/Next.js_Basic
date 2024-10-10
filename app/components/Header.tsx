import Link from 'next/link';
import React from 'react';

type HeaderProps = {
  name: string;
  bgColor: string;
};

const Header = ({ name, bgColor }: HeaderProps) => {
  return (
    <header
      style={{ width: '100vw', padding: '10px 0', backgroundColor: bgColor }}
    >
      {name}
      <Link href={'/'}> main page </Link>
      <Link href={'/about/bread'}>bread page </Link>
      <Link href={'/about/drink'}>drink page </Link>
    </header>
  );
};

export default Header;
