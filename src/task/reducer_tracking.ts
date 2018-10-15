import { Action } from "redux-actions";
import { TASK_TOGGLE_TRACKING } from "./action_toggleTracking";

const initialState = false;

export default function reducer(state = initialState, action: Action<null>) {
  switch (action.type) {
    case TASK_TOGGLE_TRACKING: {
      const result = !state;
      return result;
    }

    default:
      return state;
  }
}
