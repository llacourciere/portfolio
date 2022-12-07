import React, { useState } from 'react';
import Nav from './nav';
import About from '../Pages/about';
import Portfolio from './portfolio';
//import Contact from './contact';
//import Resume from './resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    // if (currentPage === 'Resume') {
    //     return <Resume />;
    //   }
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
