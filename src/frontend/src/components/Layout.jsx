import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.styl';

export default function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
