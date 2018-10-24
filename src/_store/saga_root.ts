import { all, spawn } from "redux-saga/effects";
import stateWrite from "../state/saga_write";
import shutdown from "../cli/saga_shutdown";
import stopTask from "../task/saga_stop";

const sagas = [stateWrite, shutdown, stopTask];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
