import createAction from '../util/createAction'
import { PayloadType, Object } from '../util'

export const HISTORY_READ = 'HISTORY_READ'

const action = createAction(HISTORY_READ)

export type PayloadHistoryRead = PayloadType<typeof action>

export default action
