import { takeLatest, call } from "redux-saga/effects";
import { Action } from "redux-actions";
import writeState from "../_services/fileSystem_writeState";
import STATE_WRITE from "./action_write";

export type payload = {
  data?: string;
  path?: string;
};

function* stateWriteSaga(action: Action<payload>) {
  const { payload = {} } = action;
  const { data, path } = payload;
  const JSONData = typeof data == "string" ? data : JSON.stringify(data);

  yield call(writeState, JSONData, path);
}

export default function* watcher() {
  yield takeLatest(STATE_WRITE, stateWriteSaga);
}
