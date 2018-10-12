import { all, spawn } from "redux-saga/effects";
import { inc, watch } from "./hello";

const sagas = [inc, watch];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
