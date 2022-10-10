import React,{ useEffect, useState } from "react";
import Canvas from './features/canvas/Canvas';
import { setWindowResize } from './actions/index';
import { useDispatch } from "react-redux";

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


  return (
    <div className="App">
      <main>
        <section>
          <div className="todoapp">
            <Canvas { ...props} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
