import {
  WINDOW_RESIZE
} from "../../actions/constants";
import { PALETTE, BASE } from "../../reducers/constants";
import * as R from "ramda";

const initialState = {
  x: 0,
  y: 0,
  vertices: [
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  r: 0,
  fill: PALETTE.JAZZY.triangle,
};

/**
 * Square action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function square(state = initialState, action) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return R.merge(state, getTriangleVertices(action));

    default:
      return state;
  }
}

/**
 * Get the square definition
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
 function getTriangleVertices({ width, height }) {

  const r = (width >= height ? width : height) * BASE;
  const x = width / 2;
  const y = height / 2;

  const vertices = [
    [-r, r],
    [r, r],
    [0, -0.8 * r]
  ];

  return { vertices, x, y, r };

}
