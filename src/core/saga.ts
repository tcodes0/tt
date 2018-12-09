import { all, spawn } from "redux-saga/effects"
import cli from "./saga_cli"
import stopTask from "./saga_stop"
import logs from "./saga_log"
import init from "./saga_init"
import modeNew from "./saga_new"

const sagas = [logs, cli, stopTask, init, modeNew]
const spawnedSagas = sagas.map(saga => spawn(saga))

export default function* rootSaga() {
  yield all(spawnedSagas)
}
