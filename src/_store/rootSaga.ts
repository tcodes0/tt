import { all, spawn } from "redux-saga/effects";
import hello from "../hello/saga";
import stateWrite from "../state/saga_write";

const sagas = [hello, stateWrite];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
