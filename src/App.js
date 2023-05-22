
import './App.css';
import React from 'react';

import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hl className="App-title">Tetris Redux</hl>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
    </div>
  );
}

export default App;
