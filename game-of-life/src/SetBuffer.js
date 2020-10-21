import { countNeighbors } from './CountNeighbors';

export const setBuffer = (buffer, matrix) => {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      buffer[x][y].neighbors = countNeighbors(x, y, matrix);

      if (matrix[x][y].isAlive === true) {
        if (buffer[x][y].neighbors < 2) {
          buffer[x][y].isAlive = false;
        };
        if (buffer[x][y].neighbors >= 4) {
          buffer[x][y].isAlive = false;
        };
        if (buffer[x][y].neighbors === 2 || buffer[x][y].neighbors === 3) {
          buffer[x][y].isAlive = true;
        };
      } else if (matrix[x][y].isAlive === false) {
        if (buffer[x][y].neighbors === 3) {
          buffer[x][y].isAlive = true;
        };
      };
    };
  };
  return buffer;
};