import { all, spawn } from "redux-saga/effects";
import stateWrite from "../state/saga_write";
import stateRead from "../state/saga_read";
import shutdown from "../cli/saga_shutdown";
import stopTask from "../task/saga_stop";

const sagas = [stateWrite, shutdown, stopTask, stateRead];
const spawnedSagas = sagas.map(saga => spawn(saga));

export default function* rootSaga() {
  yield all(spawnedSagas);
}
