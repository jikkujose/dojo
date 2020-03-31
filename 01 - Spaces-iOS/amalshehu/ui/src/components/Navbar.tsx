import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="App-header-nav">
      <a href="/" className="App-header-item Active">
        SPACES
      </a>

      <a href="/" className="App-header-item">
        PROTOTYPES
      </a>
      <a href="/" className="App-header-item">
        BOARDS
      </a>
      <a href="/" className="App-header-item">
        FAVORITES
      </a>
    </nav>
  );
}

export default Navbar;
