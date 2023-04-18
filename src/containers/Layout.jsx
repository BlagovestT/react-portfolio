import React from 'react';
import Nav from '../components/navigation/Nav';

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}

export default Layout;
