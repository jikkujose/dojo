import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <section className="App-container">
    <Nav />
    <Main />
    <Footer />
  </section>
);

export default App;
