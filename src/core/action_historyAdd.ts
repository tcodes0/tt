import createAction from '../util/createAction'
import { PayloadType } from '../util'
import { Task } from '../core'

export const HISTORY_ADD = 'HISTORY_ADD'

const action = createAction<{ task: Task }>(HISTORY_ADD)

export type PayloadHistoryAdd = PayloadType<typeof action>

export default action
