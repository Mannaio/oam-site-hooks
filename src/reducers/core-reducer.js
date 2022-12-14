import { WINDOW_RESIZE, SET_PALETTE, TOGGLE_ABOUT } from "../actions/constants";
import { BLEND_FILTER, PALETTE, BASE } from "./constants";
import * as R from "ramda";

const initialState = {
  width: 0,
  height: 0,
  bgFill: PALETTE.JAZZY.bg,
  windowWidth: 0,
  palette: "JAZZY",
  aboutModalVisible: false
};

/**
 * Core action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function core(state = initialState, action) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return R.merge(state, {
        width: action.width,
        height: action.height,
        windowWidth: action.windowWidth
      });

    default:
      return state;
  }
}
