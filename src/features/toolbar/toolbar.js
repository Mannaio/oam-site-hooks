import React, { useEffect, useRef } from "react";
import { getStyles } from "../../styles/toolbar-styles";
import { t1, t2, t3 } from "../../styles/loading-timeline";
import { gsap, Elastic } from "gsap";

/**
 * The Toolbar
 */

const Toolbar = (props) => {

  const { toolbarStyles, containerStyles, circleStyles, triangleStyles, squareStyles, aboutButtonStyles, width } = getStyles(props);
  const tl = gsap.timeline();
  const circleRef = useRef();
  const triangleRef = useRef();
  const squareRef = useRef();
  const toggleRef = useRef();

  const animate = (node, offset) => {
    tl.fromTo(node, t3, {
      transform: 'translate3d(0, 30vw, 0)',
    }, {
      transform: 'translate3d(0, 0, 0)',
    }, `phase-3+=${ offset }`);
  }

  useEffect(() => {
    animate(circleRef.current, 2.3);
    animate(triangleRef.current, 2.8);
    animate(squareRef.current, 3.3);
    animate(toggleRef.current, 3.7);
  },[]);


  //   .set(circleRef.current, {opacity: 0.2})
  // },[]);

  // function fadeIn(target, vars) {
  //   return gsap.from(target, { opacity: 0, ...vars });
  // }

  // useLayoutEffect(() => {
  //   const animation = fadeIn(circleRef.current, { x: 100 });
  // }, []);

    return (
      <div className="absolute bottom-0 left-0 flex py2 col-12 border-box"
        style={ toolbarStyles }>
        <div className="flex mx-auto col-12 flex-stretch"
          style={ containerStyles }>

          <div className="mr1 circle"
            style={ circleStyles }
            // onClick={ toggleCircle }
            ref={circleRef}
          >
          </div>

          <div style={ triangleStyles }
            // onClick={ toggleTriangle }
            ref={triangleRef}
          >
          </div>

          <div style={ squareStyles }
            // onClick={ toggleSquare }
            ref={squareRef}
          >
          </div>

          <div className="flex-auto"></div>

          <div style={ aboutButtonStyles }
            // onClick={ toggleAbout }
          >
            <svg viewBox={ width < 400 ? '0 0 40 20' : '0 0 20 20' }
              ref={toggleRef}
            >
              <text x="10" y="13">
                About
              </text>
            </svg>
          </div>

        </div>
      </div>
    );
};

export default Toolbar;
