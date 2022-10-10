import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { t1, t2 } from "../../styles/loading-timeline";
import { gsap, Elastic } from "gsap";

const circleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000
};

/**
 * The Square
 */
const Circle = (props) => {

  const fill = useSelector((state) => state.circle.fill);
  const r = useSelector((state) => state.circle.r);
  const x = useSelector((state) => state.circle.x);
  const y = useSelector((state) => state.circle.y);
  const tl = gsap.timeline();
  const boxRef = useRef();
      
  useEffect(() => {

    tl.fromTo(boxRef.current,t1, {
      // transformOrigin: '50% 50%',
      transform: `translate3d(${-2.5*r}px, ${-y-2*r}px, 0px)`,
      },{
        transform: `translate3d(${-2.5*r}px, 0px, 0px)`,
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
    <g style={{ transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)' }}>
      <circle
        ref={boxRef}
        style={ circleStyles }
        fill={ fill }
        opacity={ 0.5 }
        cx={ 0 }
        cy={ 0 }
        r={ r } />
    </g>
  );
};

export default Circle;
