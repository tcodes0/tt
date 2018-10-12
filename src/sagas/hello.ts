import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* inc() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watch() {
  yield takeEvery("INCREMENT", inc);
}
