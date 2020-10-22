import React, { useEffect, useState } from 'react';
import { countNeighbors, setBuffer } from './helper/Helpers'

const Grid = ({ matrix, dimension }) => {
  let [refresh, setRefresh] = useState(false);
  let [inter, setInter] = useState(null); 
  let [gameOn, setGameOn] = useState(false);
  let [generation, setGeneration] = useState(0);

  const slow = 1000;
  const normal = 350;
  const fast = 100;

  let [speed, setSpeed] = useState(normal);

  const toggleStatus = (cx, cy) => (e) => {
    e.preventDefault();
    matrix[cx][cy].isAlive = !matrix[cx][cy].isAlive;
    setRefresh(!refresh);
  };

  const toggleClear = (e) => {
    e.preventDefault();
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        matrix[x][y].isAlive = false;
      };
    };
    clearInterval(inter);
    setGameOn(false);
    setGeneration(0);
    setRefresh(!refresh);

  };

  const toggleRandom = (e) => {
    e.preventDefault();
    if (!gameOn) {
      for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
          matrix[x][y].isAlive = Math.random() >= 0.7;
        };
      };
      setGeneration(0);
      setRefresh(!refresh);
    }
  };

  const setNextGen = () => {
    setGeneration(generation++);
    let buffer = new Array(dimension.row);

    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = new Array(dimension.col);
      for (let y = 0; y < buffer[i].length; y++) {
        buffer[i][y] = {
          isAlive: false,
          neighbors: countNeighbors()
        };
      };
    };

    buffer = setBuffer(buffer, matrix);

    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        matrix[x][y] = buffer[x][y];
      };
    };
    setRefresh(refresh = !refresh);
  };

  const handleNextGen = (e) => {
    e.preventDefault();
    setGeneration(generation++);
    setNextGen();
  };

  const startGame = (e) => {
    e.preventDefault();
    setGameOn(true);
    setGeneration(generation++);
    setInter(setInterval(function() { setNextGen(); }, `${speed}`));
  };

  const stopGame = (e) => {
    e.preventDefault();
    clearInterval(inter);
    setGameOn(false);
  };

  useEffect(() => {
  }, [refresh]);

  return (
    <div>
      <div>
        <div>Generation: {generation}</div>
        <button onClick={handleNextGen}>Next Generation</button>
        <div>{speed === 100 ? "Speed: Fast" : null}</div>
        <div>{speed === 350 ? "Speed: Normal" : null}</div>
        <div>{speed === 1000? "Speed: Slow" : null}</div>
      </div>

      <div className="grid-container">
        {matrix.map((x, index) => (
          <div key={index} className="row">
            {x.map((y, index2) => (
              <div 
                onClick={!gameOn ? toggleStatus(index, index2) : null} 
                key={index2}
                className={matrix[index][index2].isAlive ? 'cells-alive' : 'cells-dead'}
              >
              </div>
            ))
            }
          </div>
        ))}
      </div>
      <div>
        <button onClick={startGame}>Start</button>
        <button onClick={stopGame}>Stop</button>
        <button onClick={toggleRandom}>Random</button>
        <button onClick={toggleClear}>Clear</button>
        <div>
          <h4>Select Speed</h4>
          <button onClick={!gameOn ? (e) => {e.preventDefault(); setSpeed(slow);} : null}>Slow</button>
          <button onClick={!gameOn ? (e) => {e.preventDefault(); setSpeed(normal);} : null}>Normal</button>
          <button onClick={!gameOn ? (e) => {e.preventDefault(); setSpeed(fast);} : null}>Fast</button>
        </div>
      </div>
    </div>
  )
};

export default Grid;