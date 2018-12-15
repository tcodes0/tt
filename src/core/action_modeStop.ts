import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const MODE_STOP = "MODE_STOP"

const action = createAction(MODE_STOP)

export type PayloadModeStop = PayloadType<typeof action>

export default action
