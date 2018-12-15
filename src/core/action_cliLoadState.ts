import createAction from '../util/createAction'
import { LoadState, PayloadType } from '../util'

export const CLI_LOAD_STATE = 'CLI_LOAD_STATE'

const action = createAction<LoadState['args'][0]>(CLI_LOAD_STATE)

export type PayloadLoadState = PayloadType<typeof action>

export default action
