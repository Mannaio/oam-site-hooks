import {
  WINDOW_RESIZE
} from "../../actions/constants";
import { PALETTE, BASE } from "../../reducers/constants";
import * as R from "ramda";

const initialState = {
  x: 0,
  y: 0,
  s: 0,
  fill: PALETTE.JAZZY.square,
  visible: true
};

/**
 * Square action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function square(state = initialState, action) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return R.merge(state, getSquareDef(action));

    default:
      return state;
  }
}

/**
 * Get the square definition
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
function getSquareDef({ width, height }) {
  const s = (width >= height ? width : height) * BASE * 2;
  const x = (width - s) / 2;
  const y = (height - s) / 2;

  return { x, y, s };
}
