import React, { useEffect, useState } from 'react';
import { countNeighbors } from './CountNeighbors';

const Grid = ({ matrix }) => {
  const [refresh, setRefresh] = useState(false);

  const toggleStatus = (cx, cy) => (e) => {
    e.preventDefault();
    matrix[cx][cy].isAlive = !matrix[cx][cy].isAlive;
    // console.log(index, index2);
    console.log(countNeighbors(cx, cy, matrix));
    setRefresh(!refresh);
  };

  useEffect(() => {
    
  }, [refresh]);

  return (
    <div className="grid-container">
      {matrix.map((x, index) => (
        <div key={index} className="row">
          {x.map((y, index2) => (
            <div 
              onClick={toggleStatus(index, index2)} 
              key={index2}
              className={matrix[index][index2].isAlive === true ? 'cells-alive' : 'cells-dead'}
            >
            </div>
          ))
          }
        </div>
      ))}
    </div>
  )
};

export default Grid;