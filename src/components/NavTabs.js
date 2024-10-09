
import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => handlePageChange(tab)}
            className={
              currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
