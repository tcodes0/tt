import createAction from '../util/createAction'
import { PayloadType, History } from '../util'

export const HISTORY_SET = 'HISTORY_SET'

const action = createAction<{ history: History }>(HISTORY_SET)

export type PayloadHistorySet = PayloadType<typeof action>

export default action
