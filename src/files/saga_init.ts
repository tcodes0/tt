import { takeLatest, call } from "redux-saga/effects";
import init from "../_services/fileSystem_init";
import { FILES_INIT } from "./action_init";

function* filesInitSaga() {
  yield call(init);
}

export default function* watcher() {
  yield takeLatest(FILES_INIT, filesInitSaga);
}
