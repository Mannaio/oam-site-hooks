import { combineReducers } from 'redux'
import coreReducer from './features/canvas/core-reducer'
import squaReducer from './features/square/square-reducer';
import circleReducer from './features/circle/circle-reducer';
import triangleReducer from './features/triangle/triangle-reducer';
import backgrReducer from './features/bg/bg-reducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  core: coreReducer,
  square: squaReducer,
  circle: circleReducer,
  triangle: triangleReducer,
  bkground: backgrReducer
})

export default rootReducer
