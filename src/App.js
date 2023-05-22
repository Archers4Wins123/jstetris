
import './App.css';
import React from 'react';

import GridSquare from './components/GridSquare'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hl className="App-title">Tetris Redux</hl>
      </header>
      <GridSquare color="1" />
    </div>
  );
}

export default App;
