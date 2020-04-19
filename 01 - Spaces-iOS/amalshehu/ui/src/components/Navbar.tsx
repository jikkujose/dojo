import React from 'react';
import './Navbar.scss';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

function Navbar() {
  return (
    <div className="App-header-nav">
      <nav>
        <a href="/" className="App-header-item Active">
          SPACES
        </a>

        <a href="/" className="App-header-item InActive">
          PROTOTYPES
        </a>
        <a href="/" className="App-header-item InActive">
          BOARDS
        </a>
        <a href="/" className="App-header-item InActive">
          FAVORITES
        </a>
      </nav>
      <span>
        <IconButton size={'small'} edge="end">
          <Search className="search" />
        </IconButton>
      </span>
    </div>
  );
}

export default Navbar;
