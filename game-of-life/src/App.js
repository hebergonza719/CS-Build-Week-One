import React from 'react';
import Grid from './components/Grid';
import './App.css';
import { countNeighbors } from './helper/Helpers';

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
        neighbors: countNeighbors()
      };
    };
  };

  return ( 
      <div className="App">
        <h1 className="main-heading">Conway's Game Of Life</h1>
        <div className="main">
          <Grid matrix={matrix} dimension={dimension}/>
          <div>
            <h3>Rules:</h3>
            <h4>For a space that is 'populated':</h4>
            <ul>
              <li>Each cell with one or no neighbors dies, as if by solitude.</li>
              <li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
              <li>Each cell with two or three neighbors survives.</li>
            </ul>
            <h4>For a space that is 'empty' or 'unpopulated':</h4>
            <ul>
              <li>Each cell with three neighbors becomes populated.</li>
            </ul>
          </div>
        </div>
        <div className="about-container">
          <div>
            <h3>About this Algorithm:</h3>
            <p>The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.</p>
            <p>This game became widely known when it was mentioned in an article published by Scientific American in 1970.</p>
            <p>It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply.</p>
            <p>Depending on the initial conditions, the cells form various patterns throughout the course of the game.</p>
          </div>
        </div>
      </div>
  )
}

export default App;