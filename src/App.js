import React from 'react';
import Heading from './components/Heading';
import Game from './components/Game';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Heading title="Noughts & Crosses"/>
      <Game />
    </div>
  );
}

export default App;
