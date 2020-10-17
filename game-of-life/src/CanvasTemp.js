import React, { useRef, useEffect } from 'react';

const CanvasTemp = (props) => {
  const canvasRef = useRef(null);

  let matrix = [];
  let round = 0;

  const defaults = {
    cellsX : 25,
    cellsY: 25,
    cellSize: 25,
    rules: "23/3",
    gridColor: "#eee",
    cellColor: "#ccc"
  };

  // initialize matrix
  matrix = new Array(defaults.cellsX);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(defaults.cellsY);

    for (let y = 0; y < matrix[i].length; y++) {
      matrix[i][y] = false;
    };
  };

  const draw = (context) => {
    let x = null;
    let y = null;
    // clear canvas and set colors
    context.clearRect(0, 0, defaults.cellsX * defaults.cellSize, null);
    context.strokeStyle = defaults.gridColor;
    context.fillStyle = defaults.cellColor;

    // draw grid
    for (x = 0.5; x < defaults.cellsX * defaults.cellSize; x += defaults.cellSize) {
      context.moveTo(x, 0);
      context.lineTo(x, defaults.cellsY * defaults.cellSize);
    }

    for (y = 0.5; y < defaults.cellsY * defaults.cellSize; y += defaults.cellSize) {
      context.moveTo(0, y);
      context.lineTo(defaults.cellsX * defaults.cellSize, y);
    }

    context.stroke();

    // draw matrix

    for (x = 0; x < matrix.length; x++) {
      for (y = 0; y < matrix[x].length; y++) {
        if (matrix[x][y]) {
          context.fillRect(
            x * defaults.cellSize + 1,
            y * defaults.cellSize + 1,
            defaults.cellSize - 1,
            defaults.cellSize - 1);
        }
      }
    };

  };

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    // context.fillStyle = 'rgb(200, 0, 0)';
    // context.fillRect(10, 10, 75, 75);

    // context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // context.fillRect(37.5, 37.5, 75, 75);
    draw(context);
  }, [])

  return <canvas 
    className="canvas1"
    ref={canvasRef} 
    // width={props.width}
    // height={props.height}
    width={defaults.cellsX * defaults.cellSize}
    height={defaults.cellsY * defaults.cellSize}
  />
};
// test

export default CanvasTemp;