import React, { useEffect, useState } from 'react';
import { countNeighbors } from './CountNeighbors';
import { setBuffer } from './SetBuffer';

const Grid = ({ matrix, dimension }) => {
  const [refresh, setRefresh] = useState(false);

  const toggleStatus = (cx, cy) => (e) => {
    e.preventDefault();
    matrix[cx][cy].isAlive = !matrix[cx][cy].isAlive;
    console.log(countNeighbors(cx, cy, matrix));
    setRefresh(!refresh);
  };

  const toggleClear = (e) => {
    e.preventDefault();
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        matrix[x][y].isAlive = false;
      };
    };
    setRefresh(!refresh)
  };

  const toggleRandom = (e) => {
    e.preventDefault();
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        matrix[x][y].isAlive = Math.random() >= 0.7;
      };
    };
    setRefresh(!refresh);
  };

  const nextGen = (e) => {
    e.preventDefault();
    // needs to be in here in order to refresh
    let buffer = new Array(dimension.row);

    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = new Array(dimension.col);
      for (let y = 0; y < buffer[i].length; y++) {
        buffer[i][y] = {
          isAlive: false,
          isToggleable: true,
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

    setRefresh(!refresh);
  };

  useEffect(() => {
  }, [refresh]);

  return (
    <div>
      <div className="grid-container">
        {matrix.map((x, index) => (
          <div key={index} className="row">
            {x.map((y, index2) => (
              <div 
                onClick={matrix[index][index2].isToggleable ? toggleStatus(index, index2) : null} 
                key={index2}
                className={matrix[index][index2].isAlive ? 'cells-alive' : 'cells-dead'}
              >
              </div>
            ))
            }
          </div>
        ))}
      </div>
      <button onClick={toggleClear}>Clear</button>
      <button onClick={toggleRandom}>Random</button>
      <button onClick={nextGen}>Next Generation</button>
    </div>
  )
};

export default Grid;