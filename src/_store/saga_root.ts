import { all, spawn } from "redux-saga/effects";
import stateWrite from "../state/saga_write";
import shutdown from "../cli/saga_shutdown";
import stopTask from "../task/saga_stop";
import init from "../files/saga_init";

const sagas = [stateWrite, shutdown, stopTask, init];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
