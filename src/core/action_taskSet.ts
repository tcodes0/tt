import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const TASK_SET = "TASK_SET"

const action = createAction<{ name: string }>(TASK_SET)

export type PayloadSet = PayloadType<typeof action>

export default action
