import createAction from "../util/createAction"

export const TASK_STOP = "TASK_STOP"

export type PayloadStop = { taskName?: string }

export default createAction<PayloadStop>(TASK_STOP)
