import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { t3 } from '../../styles/loading-timeline';
import { gsap, Elastic } from "gsap";

/**
 * The rectangle in the background
 */
const BG = (props) => {

  // componentDidMount = () => {
  //   tl.fromTo(this._rectangle, t3, {
  //     transformOrigin: '100% 0',
  //     transform: 'scaleX(0) translate3d(0px, 0px, 0px)',
  //   }, {
  //     transform: 'scaleX(1) translate3d(0px, 0px, 0px)',
  //     ease: Expo.easeOut,
  //   }, 'phase-3');
  // }
  const { w, h } = props;
  const boxRef = useRef();
  // const w = useSelector((state) => state.bkground.w);
  // const h = useSelector((state) => state.bkground.h);
  const fill = useSelector((state) => state.bkground.bgfill);

  const tl = gsap.timeline();

  // console.log('w', w);
  // console.log('h', h);

  // useEffect(() => {

  //   tl.addLabel("phase-3", 2)
  //   .fromTo(boxRef.current, t3, {
  //     transformOrigin: '100% 0',
  //     transform: 'scaleX(0) translate3d(0px, 0px, 0px)',
  //     },{
  //       transform: 'scaleX(1) translate3d(0px, 0px, 0px)',
  //       // ease: Elastic.easeOut
  //     }, "phase-3")
  // },[]);

  useEffect(() => {
    tl.addLabel("phase-3", 2).fromTo(boxRef.current,t3,
      {
        transformOrigin: "100% 0",
        scaleX: 0,
        transform: 'scaleX(1) translate3d(0px, 0px, 0px)',
      },
      {
        transform: 'scaleX(1) translate3d(0px, 0px, 0px)',
        scaleX: 1
      },
      "phase-3"
    );
  },[]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline();
  //     tl.addLabel("phase-3", 2).fromTo(
  //       boxRef.current,
  //       t3,
  //       {
  //         transformOrigin: "100% 0",
  //         scaleX: 0,
  //         transform: 'scaleX(0) translate3d(0px, 0px, 0px)',
  //       },
  //       {
  //         transform: 'scaleX(1) translate3d(0px, 0px, 0px)',
  //         scaleX: 1
  //       },
  //       "phase-3"
  //     );
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);


  const d = [
    'M', w / 2, 0,
    'H', w,
    'V', h,
    'H', w / 2,
    'Z'
  ].join(' ');

  return (
    <path style={{ transform: 'scaleY(0) translate3d(0px, 0px, 0px)' }}
      ref={boxRef}
      fill={ fill }
      d={ d } />
  );


}


export default BG;
