import { takeLatest, call } from "redux-saga/effects";
import { Action } from "redux-actions";
import persistState from "../../services/filesystem/persistState";
import STATE_WRITE from "../../effects/state/write";

type payload = {
  data?: string,
  path?: string;
}

function* stateWriteSaga(action: Action<payload>) {
  const { payload = {} } = action

  try {
    yield call(persistState, undefined, "./foo.json", payload.data)
  } catch (e) {
    console.log("saga erro", e);
    // put(stateWriteError)
  }
}

export default function* watcher() {
  yield takeLatest(STATE_WRITE, stateWriteSaga);
}
