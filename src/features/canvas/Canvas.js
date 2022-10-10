import React, { Component } from "react";
import Square from "../square/square";
import Circle from "../circle/circle";
import Triangle from "../triangle/triangle";
import BG from "../bg/Bg";
import { useSelector } from "react-redux";
/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const Canvas = ({ core, square, triangle, circle }) => {
  // const { width, height, bgFill } = core;
  const width = useSelector((state) => state.core.width);
  const height = useSelector((state) => state.core.height);
  const bgFill = useSelector((state) => state.core.bgfill);
  const viewBox = [0, 0, width, height].join(" ");

  console.log('width', width);
  console.log('height', height);

  const content =
    width !== 0 && height !== 0 ? (
      <g>
        <BG fill={ bgFill }
        w={ width }
        h={ height } />

        <Square {...square} />
        <Triangle { ...triangle } />
        <Circle { ...circle } />
      </g>
    ) : null;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={viewBox}
    >
      {content}
    </svg>
  );
};

export default Canvas;
