export const countNeighbors = (x, y, matrix) => {
  let count = 0;
  if (x -1 >= 0 && y -1 >= 0) {
    if (matrix[x-1][y-1].isAlive) {
      count++;
    }
  }

  if (x -1 >= 0) {
    if (matrix[x-1][y].isAlive) {
      count++;
    }    
  }

  if (x -1 >= 0 && y+1 < 25) {
    if (matrix[x-1][y+1].isAlive) {
      count++;
    }
  }

  if (y+1 < 25) {
    if (matrix[x][y+1].isAlive) {
      count++;
    }
  }

  if (y -1 >= 0) {
    if (matrix[x][y-1].isAlive) {
      count++;
    }
  }
  
  if (x+1 < 25) {
    if (matrix[x+1][y].isAlive) {
      count++;
    }
  }

  if (x+1 < 25 && y -1 >= 0) {
    if (matrix[x+1][y-1].isAlive) {
      count++;
    }
  }

  if (x+1 < 25 && y+1 < 25) {
    if (matrix[x+1][y+1].isAlive) {
      count++;
    } 
  }
  
  return count;
};