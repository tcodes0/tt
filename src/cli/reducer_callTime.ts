import { Action } from "redux-actions";
import { CLI_SET_CALL_TIME } from "./action_setCallTime";

const initialState = 0;

export default function reducer(state = initialState, action: Action<null>) {
  switch (action.type) {
    case CLI_SET_CALL_TIME: {
      const result = Date.now();
      return result;
    }

    default:
      return state;
  }
}
