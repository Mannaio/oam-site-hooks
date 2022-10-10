import {
  WINDOW_RESIZE
} from "../../actions/constants";
import { PALETTE, BASE } from "../../reducers/constants";
import * as R from "ramda";

const initialState = {
  x: 0,
  y: 0,
  s: 0,
  fill: PALETTE.JAZZY.circle,
  visible: true
};

/**
 * Square action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function circle(state = initialState, action) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return R.merge(state, getCircleDef(action));

    default:
      return state;
  }
}

/**
 * Get the square definition
 * @param  {Number} options.width
 * @param  {Number} options.height
 */

 function getCircleDef({ width, height }) {

  const x = width / 2;
  const y = height / 2;
  const r = (width >= height ? width : height) * 0.9 * BASE;

  return { x, y, r };

}

