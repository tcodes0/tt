import { combineReducers } from "redux";
import tracking from "./tracking";
import increment from "./increment";

const rootReducer = combineReducers({
  tracking,
  increment
});

export default rootReducer;