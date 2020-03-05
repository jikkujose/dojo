import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => (
  <section className="App-container">
    <Nav />
    <Main />
    <Footer />
  </section>
);

export default App;
