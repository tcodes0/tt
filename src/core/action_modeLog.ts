import createAction from '../util/createAction'
import { PayloadType } from '../util'

export const PRINT_LOG = 'PRINT_LOG'

const action = createAction<{
  time: 'today' | 'week' | 'month' | 'all' | 'last'
}>(PRINT_LOG)

export type PayloadLog = PayloadType<typeof action>

export default action
