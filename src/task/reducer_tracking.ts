import { Action } from "redux-actions";
import { TASK_TOGGLE_TRACKING } from "./action_toggleTracking";
import { TASK_NEW } from "../task/action_new";

const initialState = false;

export default function reducer(state = initialState, action: Action<null>) {
  switch (action.type) {
    case TASK_TOGGLE_TRACKING: {
      const result = !state;
      return result;
    }

    case TASK_NEW: {
      const result = true;
      return result;
    }

    default:
      return state;
  }
}
