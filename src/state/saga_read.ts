import { EmptyObject } from "./../_utils/types";
import { takeLatest, call, put } from "redux-saga/effects";
import { Action } from "redux-actions";
import readState from "../_services/fileSystem_readState";
import { STATE_READ_START } from "./action_readStart";
import readEnd from "./action_readEnd";
import { replaceReducer, getState } from "../_store";
import rootReducer from "../_store/reducer_root";

const reloadReducer = (newState: any) => (state: any, action: any) => {
  return state
}

function* stateWriteSaga(action: Action<EmptyObject>) {
  const string = yield call(readState); // needs to be sync
  const state = JSON.parse(string)
  replaceReducer(reloadReducer(state))
  replaceReducer(rootReducer)
  yield put(readEnd({}));
}

export default function* watcher() {
  yield takeLatest(STATE_READ_START, stateWriteSaga);
}
