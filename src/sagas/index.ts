import { all, spawn } from "redux-saga/effects";
import hello from "./hello";
import stateWrite from "./state/write";

const sagas = [hello, stateWrite];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
