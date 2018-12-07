import createAction from "../util/createAction"

export const TASK_SET = "TASK_SET"

export default createAction<{ name: string }>(TASK_SET)
