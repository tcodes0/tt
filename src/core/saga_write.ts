import { CLI_WRITE } from "./action_cliWrite"
import { takeLatest, call } from "redux-saga/effects"
import { Action } from "redux-actions"
import { writeTtFile, WriteTtFileArgs } from "../util"

function* saga(action: Action<WriteTtFileArgs>) {
  const { payload } = action
  yield call(writeTtFile, payload)
}

export default function* writeSaga() {
  yield takeLatest(CLI_WRITE, saga)
}
