
import './App.css';
import React from 'react';

import GridBoard from './components/GridBoard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hl className="App-title">Tetris Redux</hl>
      </header>
      <GridBoard />
    </div>
  );
}

export default App;
