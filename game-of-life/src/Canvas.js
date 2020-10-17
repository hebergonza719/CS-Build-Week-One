import React from 'react';
import useCanvas from './hooks/useCanvas';

const Canvas = props => {  
  
  const { draw, ...rest } = props;
  const [canvasRef, reqID] = useCanvas(draw);

  const stop = (e) => {
    e.preventDefault()
    window.cancelAnimationFrame(reqID.current);
  }
  
  return <div><canvas 
    className="canvas1" 
    width="100" 
    height="250" 
    onClick={stop} 
    ref={canvasRef} {...rest}
  /></div>;
}

export default Canvas;