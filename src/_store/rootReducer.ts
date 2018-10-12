import { combineReducers } from "redux";
import tracking from "../tracking/reducer";
import hello from "../hello/reducer";

const rootReducer = combineReducers({
  tracking,
  hello
});

export default rootReducer;
