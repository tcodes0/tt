import { all, spawn } from "redux-saga/effects"
import stateWrite from "./saga_write"
import shutdown from "./saga_shutdown"
import stopTask from "./saga_stop"

const sagas = [stateWrite, shutdown, stopTask]
const spawnedSagas = sagas.map((saga) => spawn(saga))

export default function* rootSaga() {
  yield all(spawnedSagas)
}
