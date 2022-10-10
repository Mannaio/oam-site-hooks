import {
  WINDOW_RESIZE
} from "../../actions/constants";
import { PALETTE, BASE } from "../../reducers/constants";
import * as R from "ramda";

const initialState = {
  w: 0,
  h: 0,
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

    default:
      return state;
  }
}


