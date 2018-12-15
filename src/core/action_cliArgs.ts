import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const CLI_STARTING = "CLI_STARTING"

const action = createAction<string[]>(CLI_STARTING)

export type PayloadCliArgs = PayloadType<typeof action>

export default action
