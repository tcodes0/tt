import { Action } from "redux-actions";

export type StateType = {
  value: number;
};

const initialState: StateType = {
  value: 0
};

export default function reducer(
  state: StateType = initialState,
  action: Action<null>
) {
  switch (action.type) {
    case "INCREMENT": {
      const result = { value: state.value + 1 };
      return result;
    }

    default:
      return state;
  }
}
