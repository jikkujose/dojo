import React from 'react';
import './App.scss';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    <div className="App">
      <h2>SPACES iOS</h2>
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main>Hello world</main>
      <footer>Footer is coming</footer>
    </div>
  );
}

export default App;
