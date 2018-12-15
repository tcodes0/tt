import createAction from '../util/createAction'
import { WriteTtFile, PayloadType } from '../util'

export const CLI_WRITE = 'CLI_WRITE'

const action = createAction<WriteTtFile['args'][0]>(CLI_WRITE)

export type PayloadWrite = PayloadType<typeof action>

export default action
