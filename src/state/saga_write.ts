import { takeLatest, call } from "redux-saga/effects";
import { Action } from "redux-actions";
import persistState from "../_services/fileSystem_persistState";
import STATE_WRITE from "./action_write";

export type payload = {
  data?: string;
  path?: string;
};

function* stateWriteSaga(action: Action<payload>) {
  const { payload = {} } = action;
  const { data = "foobar\n", path = "./foo.json" } = payload;
  const JSONData = JSON.stringify(data);

  try {
    yield call(persistState, undefined, path, JSONData);
  } catch (e) {
    throw e;
  }
}

export default function* watcher() {
  yield takeLatest(STATE_WRITE, stateWriteSaga);
}
