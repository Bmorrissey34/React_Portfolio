import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Travel from './pages/Travel'; // Updated import
import './assets/styles/animations.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    const pageClasses = 'fade-in'; // Optional animation class
    switch (currentPage) {
      case 'About':
        return <div className={pageClasses}><About /></div>;
      case 'Portfolio':
        return <div className={pageClasses}><Portfolio /></div>;
      case 'Resume':
        return <div className={pageClasses}><Resume /></div>;
      case 'Contact':
        return <div className={pageClasses}><Contact /></div>;
      case 'Travel': // Updated case
        return <div className={pageClasses}><Travel /></div>;
      default:
        return <div className={pageClasses}><About /></div>;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
