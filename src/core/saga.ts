import { all, spawn } from 'redux-saga/effects'
import cli from './saga_cli'
import stopTask from './saga_stop'
import logs from './saga_log'
import log from './saga_logCli'
import init from './saga_init'
import modeNew from './saga_new'
import history from './saga_history'

const sagas = [logs, log, history, cli, stopTask, init, modeNew]
const spawnedSagas = sagas.map(saga => spawn(saga))

export default function* rootSaga() {
  yield all(spawnedSagas)
}
