import React from 'react';
import Grid from './Grid';
import './App.css';
import { countNeighbors } from './CountNeighbors';

function App() {

  const dimension = {
    row: 25,
    col: 25
  }

  let matrix = new Array(dimension.row);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(dimension.col);
    for (let y = 0; y < matrix[i].length; y++) {
      matrix[i][y] = {
        isAlive: false,
        isToggleable: true,
        neighbors: countNeighbors()
      };
    };
  };

  return ( 
      <div>
        <Grid matrix={matrix} dimension={dimension}/>
      </div>
  )
}

export default App;