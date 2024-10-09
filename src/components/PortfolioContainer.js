
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './assets/styles/animations.css'; // Import custom animations

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    const pageClasses = "fade-in";
    if (currentPage === 'About') {
      return <div className={pageClasses}><About /></div>;
    }
    if (currentPage === 'Portfolio') {
      return <div className={pageClasses}><Portfolio /></div>;
    }
    if (currentPage === 'Resume') {
      return <div className={pageClasses}><Resume /></div>;
    }
    if (currentPage === 'Contact') {
      return <div className={pageClasses}><Contact /></div>;
    }
    return <div className={pageClasses}><Resume /></div>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
