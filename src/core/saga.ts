import { all, spawn } from "redux-saga/effects"
import write from "./saga_write"
import shutdown from "./saga_shutdown"
import stopTask from "./saga_stop"
import logs from "./saga_log"
import init from "./saga_init"

const sagas = [logs, write, shutdown, stopTask, init]
const spawnedSagas = sagas.map(saga => spawn(saga))

export default function* rootSaga() {
  yield all(spawnedSagas)
}
