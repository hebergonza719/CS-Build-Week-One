import React from 'react';
import Grid from './Grid';
import './App.css';

function App() {
  const defaults = {
    row: 25,
    col: 25
  }

  let matrix = new Array(defaults.row);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(defaults.col);
    for (let y = 0; y < matrix[i].length; y++) {
      matrix[i][y] = false;
    };
  };

  return ( 
    <div>
      <Grid matrix={matrix}/>
    </div>
  )
}

export default App;