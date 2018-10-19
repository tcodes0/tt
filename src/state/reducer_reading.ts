import { Action } from "redux-actions";
import { STATE_READ_START } from "./action_readStart";
import { STATE_READ_END } from "./action_readEnd";
import { EmptyObject } from "../_utils/types";

const initialState = false;

export default function reducer(
  state = initialState,
  action: Action<EmptyObject>
) {
  switch (action.type) {
    case STATE_READ_START: {
      return true;
    }
    case STATE_READ_END: {
      return false;
    }
    default:
      return state;
  }
}
