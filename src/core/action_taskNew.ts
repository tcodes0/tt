import createAction from "../util/createAction"

export const TASK_NEW = "TASK_NEW"

export default createAction<{ name: string }>(TASK_NEW)
