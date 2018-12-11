import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const MODE_NEW = "MODE_NEW"

const action = createAction<{ name: string }>(MODE_NEW)

export type PayloadNew = PayloadType<typeof action>

export default action
