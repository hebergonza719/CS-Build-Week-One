import React from 'react';
// import Canvas from './Canvas';
import CanvasTemp from './CanvasTemp';
import './App.css';

function App() {

  // const draw = (context, frameCount) => {
  //   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  //   context.fillStyle = '#000000'
  //   context.beginPath()
  //   context.arc(50, 100, 35*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
  //   context.fill()
  // };

  // const draw1 = (context) => {
  //   context.beginPath();
  //   context.moveTo(75, 50);
  //   context.lineTo(100, 75);
  //   context.lineTo(100, 25);
  //   // closePath() not necessary because of context.fill()
  //   // context.closePath();
  //   // context.fillStyle = '#000fff'
  //   context.moveTo(150, 50);
  //   context.lineTo(200, 75);
  //   context.lineTo(200, 25);
  //   context.fill();
  // };

  return <div>
      {/* <Canvas draw={draw} /> */}
      {/* <CanvasTemp draw={draw1} width={500} height={500} /> */}
      <CanvasTemp />
    </div>
}

export default App;