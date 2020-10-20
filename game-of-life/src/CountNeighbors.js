export const countNeighbors = (cx, cy, matrix) => {
  let count = 0;
  if (cx -1 >= 0 && cy -1 >= 0) {
    if (matrix[cx-1][cy-1]) {
      count++;
    }
  }

  if (cx -1 >= 0) {
    if (matrix[cx-1][cy]) {
      count++;
    }    
  }

  if (cx -1 >= 0 && cy+1 < 25) {
    if (matrix[cx-1][cy+1]) {
      count++;
    }
  }

  if (cy+1 < 25) {
    if (matrix[cx][cy+1]) {
      count++;
    }
  }

  if (cy -1 >= 0) {
    if (matrix[cx][cy-1]) {
      count++;
    }
  }
  
  if (cx+1 < 25) {
    if (matrix[cx+1][cy]) {
      count++;
    }
  }

  if (cx+1 < 25 && cy -1 >= 0) {
    if (matrix[cx+1][cy-1]) {
      count++;
    }
  }

  if (cx+1 < 25 && cy+1 < 25) {
    if (matrix[cx+1][cy+1]) {
      count++;
    } 
  }
  
  return count;
};