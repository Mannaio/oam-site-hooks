import React,{ useEffect, useState } from "react";
import Canvas from './features/canvas/canvas';
import Toolbar from './features/toolbar/toolbar';
import { setWindowResize } from './actions/index';
import { useDispatch, useSelector } from "react-redux";

function App(props) {

  const dispatch = useDispatch();

  const handleResizeWindow = () => {
    dispatch(setWindowResize({width: window.innerWidth, height: window.innerHeight}));
  }

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    handleResizeWindow();
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  const triangle = useSelector((state) => state.triangle);
  const square = useSelector((state) => state.square);
  const circle = useSelector((state) => state.circle);
  const core = useSelector((state) => state.core);
  
  const toolbarProps = {
    triangle: true,
    square: square.visible,
    circle: circle.visible,
    width: core.windowWidth,
    fills: {
      triangle: triangle.fill,
      square: square.fill,
      circle: circle.fill
    }
  };

  console.log('toolbarProps', toolbarProps);


  return (
    <div className="App">
      <main>
        <section>
          <div className="todoapp">
            <Canvas { ...props} />
            <Toolbar { ...toolbarProps} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
