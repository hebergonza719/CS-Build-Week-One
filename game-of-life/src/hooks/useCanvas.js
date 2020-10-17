import { useRef, useEffect } from 'react';

const useCanvas = (draw) => {
  const canvasRef = useRef(null);

  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    // it is being declared here to be modified on
    // in render
    // to later be used in cancelAnimationFrame()
    
    // let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount)
      // it's storing the req.ani.frame request id from the call back in this variable.
      animationFrameId.current = window.requestAnimationFrame(render);
    }

    render();

    return () => {
      // cancels an animation frame request prev. scheduled through a call
      // to window.requestAnimationFrame()
      window.cancelAnimationFrame(animationFrameId);
    };

  }, [draw]);

  return [canvasRef, animationFrameId];
};

export default useCanvas;