import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { t1, t2 } from "../../styles/loading-timeline";
import { gsap, Elastic } from "gsap";

const triangleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000,
  opacity: 0.5
};

/**
 * The Square
 */
const Triangle = (props) => {

  const fill = useSelector((state) => state.triangle.fill);
  const r = useSelector((state) => state.triangle.r);
  const x = useSelector((state) => state.triangle.x);
  const y = useSelector((state) => state.triangle.y);
  const vertices = useSelector((state) => state.triangle.vertices);
  const tl = gsap.timeline();
  const boxRef = useRef();

    /**
   * Utilities
   */
  function buildD(vertices) {
    return [
      'M', ...vertices[0],
      'L', ...vertices[0],
      'L', ...vertices[1],
      'L', ...vertices[2],
      'Z'
    ].join(' ');
  }

  const d = buildD(vertices);
      
  useEffect(() => {

    tl.fromTo(boxRef.current,t1, {
      // transformOrigin: '50% 50%',
      transform: `translate3d(0px, ${-y-r}px, 0px)`,
      },{
        transform: `translate3d(0px, 0px, 0px)`,
        // ease: Elastic.easeOut
      })  

    .set(boxRef.current, {opacity: 0.2})
  
  },[]);

  return (
    <g style={{
      transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)'
    }}>
      <path
        ref={boxRef}
        style={ triangleStyles }
        fill={ fill }
        d={ d }
        clipPath="url(#circle-mask)" />
    </g>
  );
};

export default Triangle;
