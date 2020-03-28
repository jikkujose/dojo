import React from 'react';
import './App.scss';
import SwipeableViews from 'react-swipeable-views';
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
const styles = {
  slide: {
    // padding: 15,
    minHeight: 100
  },
  slide1: {},
  slide2: {},
  slide3: {}
};
const card = (
  <div className="card">
    <div className="card-image"></div>
    <div className="card-text">
      <h2>Nike performance</h2>
      <p>7 Products</p>
    </div>
  </div>
);
function App() {
  return (
    <div className="App">
      <span>
        <i className="gg-bolt"></i>
      </span>

      <div className="wrapper">
        <div className="header">
          <header>
            <Navbar></Navbar>
          </header>
        </div>
        <div className="box content">
          <SwipeableViews>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              {card}
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              {card}
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              {card}
            </div>
          </SwipeableViews>
        </div>
        <div className="box footer">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
