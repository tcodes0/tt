import createAction from '../util/createAction'
import { PayloadType } from '../util'

export const MODE_LOG = 'MODE_LOG'

const action = createAction<{ time: string }>(MODE_LOG)

export type PayloadLog = PayloadType<typeof action>

export default action
