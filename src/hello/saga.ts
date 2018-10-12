import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

function* inc() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export default function* watch() {
  yield takeEvery("INCREMENT", inc);
}
