import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const TASK_STOP = "TASK_STOP"

const action = createAction(TASK_STOP)

export type PayloadStop = PayloadType<typeof action>

export default action
