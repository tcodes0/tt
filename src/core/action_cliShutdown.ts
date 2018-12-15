import createAction from '../util/createAction'
import { PayloadType } from '../util'

export const CLI_SHUTDOWN = 'CLI_SHUTDOWN'

const action = createAction(CLI_SHUTDOWN)

export type PayloadShutdown = PayloadType<typeof action>

export default action
