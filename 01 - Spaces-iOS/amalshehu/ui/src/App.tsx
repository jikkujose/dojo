import React from 'react';
import './App.scss';
import Navbar from '../src/components/Navbar';
function App() {
  return (
    <div className="App">
      {/* <span>
        <i className="gg-bolt"></i>
      </span> */}
      <div className="wrapper">
        <div className="header">
          <header>
            <Navbar></Navbar>
          </header>
        </div>
        <div className="box content">
          Content
          <br /> More content than we had before so this column is now quite
          tall.
        </div>
        <div className="box footer">Footer</div>
      </div>
    </div>
  );
}

export default App;
