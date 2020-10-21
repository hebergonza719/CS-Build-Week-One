import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const dimension = {
    row: 25,
    col: 25
  }

  let matrix = new Array(dimension.row);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(dimension.col);
    for (let y = 0; y < matrix[i].length; y++) {
      matrix[i][y] = false;
    };
  };

  let [matrix1, setMatrix1] = useState(matrix);

  const toggleClear = (e) => {
    e.preventDefault();
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        matrix[x][y] = false;
      };
    };
    setRefresh(!refresh)
  };

  useEffect(() => {

  }, [refresh])

  return ( 
      <div>
        <Grid matrix={matrix}/>
        <button onClick={toggleClear}>Clear</button>
      </div>
  )
}

export default App;