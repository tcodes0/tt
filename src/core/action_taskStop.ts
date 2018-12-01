import { createAction } from "redux-actions"

export const TASK_STOP = "TASK_STOP"

export type PayloadActionStop = { taskName?: string }

export default createAction<PayloadActionStop>(TASK_STOP)
