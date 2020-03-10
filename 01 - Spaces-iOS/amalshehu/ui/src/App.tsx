import React from 'react';
import './App.scss';
import SwipeableViews from 'react-swipeable-views';
import Navbar from '../src/components/Navbar';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff'
  },
  slide1: {
    background: '#FEA900'
  },
  slide2: {
    background: '#B3DC4A'
  },
  slide3: {
    background: '#6AC0FF'
  }
};
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
          <SwipeableViews>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
          </SwipeableViews>
        </div>
        <div className="box footer">Footer</div>
      </div>
    </div>
  );
}

export default App;
