export const countNeighbors = (cx, cy, matrix) => {
  let count = 0;
  if (cx -1 >= 0 && cy -1 >= 0) {
    if (matrix[cx-1][cy-1].isAlive) {
      count++;
    }
  }

  if (cx -1 >= 0) {
    if (matrix[cx-1][cy].isAlive) {
      count++;
    }    
  }

  if (cx -1 >= 0 && cy+1 < 25) {
    if (matrix[cx-1][cy+1].isAlive) {
      count++;
    }
  }

  if (cy+1 < 25) {
    if (matrix[cx][cy+1].isAlive) {
      count++;
    }
  }

  if (cy -1 >= 0) {
    if (matrix[cx][cy-1].isAlive) {
      count++;
    }
  }
  
  if (cx+1 < 25) {
    if (matrix[cx+1][cy].isAlive) {
      count++;
    }
  }

  if (cx+1 < 25 && cy -1 >= 0) {
    if (matrix[cx+1][cy-1].isAlive) {
      count++;
    }
  }

  if (cx+1 < 25 && cy+1 < 25) {
    if (matrix[cx+1][cy+1].isAlive) {
      count++;
    } 
  }
  
  return count;
};