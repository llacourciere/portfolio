import React, { useState } from 'react';
import Nav from './nav';
import About from '../Pages/about';
import Portfolio from './portfolio';
//import Contact from './contact';
import ResumePage from '../Pages/resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Resume');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <ResumePage />;
      }
    // return <Contact />;
}


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
  }
