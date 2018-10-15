import { all, spawn } from "redux-saga/effects";
import stateWrite from "../state/saga_write";

const sagas = [stateWrite];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
