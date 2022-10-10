import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { t1, t2 } from "../../styles/loading-timeline";
import { gsap, Elastic } from "gsap";

const squareStyles = {
  opacity: 0.5,
  transformOrigin: "50% 50%"
};

/**
 * The Square
 */
const Square = (props) => {

  const fill = useSelector((state) => state.square.fill);
  const s = useSelector((state) => state.square.s);
  const x = useSelector((state) => state.square.x);
  const y = useSelector((state) => state.square.y);
  const tl = gsap.timeline();
  const boxRef = useRef();
      
  useEffect(() => {

    tl.fromTo(boxRef.current,t1, {
      // transformOrigin: '50% 50%',
      transform: `translate3d(${1.125*s}px, ${-y-s}px, 0px)`
      },{
        transform: `translate3d(${1.125*s}px, 0px, 0px)`,
        // ease: Elastic.easeOut.config(1, 0.75)
      })
      .to(boxRef.current, t2, {
        transform: `translate3d(0px, 0px, 0px)`,
        ease: Elastic.easeInOut
      }
    )    

    .set(boxRef.current, {opacity: 0.2})
  
  },[]);


  return (
    <g style={{ transform: "translate3d(" + x + "px, " + y + "px, 0)" }}>
      <rect
        ref={boxRef}
        style={squareStyles}
        fill={fill}
        x={0}
        y={0}
        width={s}
        height={s}
      />
    </g>
  );
};

export default Square;
