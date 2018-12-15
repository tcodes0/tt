import createAction from '../util/createAction'
import { PayloadType } from '../util'

export const TASK_SET_START = 'TASK_SET_START'

const action = createAction<{ name: string }>(TASK_SET_START)

export type PayloadSet = PayloadType<typeof action>

export default action
