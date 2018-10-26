import { createAction } from "redux-actions"

export const TASK_NEW = "TASK_NEW"

export type PayloadActionNew = { name: string }

export default createAction<PayloadActionNew>(TASK_NEW)
