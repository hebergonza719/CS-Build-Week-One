import React, { useEffect, useState } from 'react';
import { countNeighbors, setBuffer } from '../helper/Helpers';
import '../App.css';

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
      <div className="gen-and-speed">
        <div className="gen-container">
          <div className="gen-title">Generation: {generation}</div>
          <button className="gen-button buttons" onClick={handleNextGen}>Next-Gen</button>         
        </div>
        <div className="speed-title">{speed === 100 ? "Speed: Fast" : undefined}</div>
        <div className="speed-title">{speed === 350 ? "Speed: Normal" : undefined}</div>
        <div className="speed-title">{speed === 1000? "Speed: Slow" : undefined}</div>
      </div>

      <div>
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
      </div>

      <div>
        <h4>Main Controls</h4>
        <div className="button-container">
          <button className="buttons" onClick={!gameOn ? startGame : null}>Start</button>
          <button className="buttons" onClick={stopGame}>Stop</button>
          <button className="buttons" onClick={toggleRandom}>Random</button>
          <button className="buttons" onClick={toggleClear}>Clear</button>
        </div>
        <div>
          <h4>Select Speed</h4>
          <div className="speed-button-container">
            <button className="buttons" onClick={!gameOn ? (e) => {e.preventDefault(); setSpeed(slow);} : null}>Slow</button>
            <button className="buttons" onClick={!gameOn ? (e) => {e.preventDefault(); setSpeed(normal);} : null}>Normal</button>
            <button className="buttons" onClick={!gameOn ? (e) => {e.preventDefault(); setSpeed(fast);} : null}>Fast</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Grid;