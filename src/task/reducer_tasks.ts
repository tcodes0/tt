import { Action } from "redux-actions";
import { TASK_NEW, PayloadT } from "./action_new";
import { TaskT } from "../_utils/types";

const initialState: TaskT[] = [];

export default function reducer(
  state = initialState,
  action: Action<PayloadT>
) {
  switch (action.type) {
    case TASK_NEW: {
      const name = action.payload ? action.payload.name : "";
      const start = Date.now();
      const result = { name, start };
      return [...state, result];
    }

    default:
      return state;
  }
}
