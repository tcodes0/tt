import { takeLatest, call } from "redux-saga/effects";
import { Action } from "redux-actions";
import writeState from "../_services/fileSystem_writeState";
import { STATE_WRITE, PayloadT } from "./action_write";
import { getState } from "../_store";

function* stateWriteSaga(action: Action<PayloadT>) {
  const { payload = {} } = action;
  const { path } = payload;
  const data = JSON.stringify(getState());

  yield call(writeState, data, path);
}

export default function* watcher() {
  yield takeLatest(STATE_WRITE, stateWriteSaga);
}
