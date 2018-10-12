import { Action } from "redux-actions";
import { TOGGLE_TRACKING } from "./action_toggle";

export type StateType = {
  tracking: boolean;
};

const initialState: StateType = {
  tracking: false
};

export default function reducer(
  state: StateType = initialState,
  action: Action<null>
) {
  switch (action.type) {
    case TOGGLE_TRACKING: {
      const result = { tracking: !state.tracking };
      return result;
    }

    default:
      return state;
  }
}
