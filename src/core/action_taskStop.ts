import createAction from "../util/createAction"
import { EmptyObject } from "../util"

export const TASK_STOP = "TASK_STOP"

export default createAction<EmptyObject>(TASK_STOP)
