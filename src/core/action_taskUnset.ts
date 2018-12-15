import createAction from '../util/createAction'
import { PayloadType } from '../util'

export const TASK_UNSET = 'TASK_UNSET'

const action = createAction(TASK_UNSET)

export type PayloadUnset = PayloadType<typeof action>

export default action
