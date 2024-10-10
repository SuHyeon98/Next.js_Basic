import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

type AboutLayout = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: AboutLayout) => {
  return (
    <>
      <Header name="about" bgColor="pink" />
      <main style={{ padding: '20px' }}>{children}</main>
    </>
  );
};

export default AboutLayout;
