import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const TASK_SET_END = "TASK_SET_END"

const action = createAction(TASK_SET_END)

export type PayloadStop = PayloadType<typeof action>

export default action
