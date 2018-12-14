import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const CLI_ARGS = "CLI_ARGS"

const action = createAction<string[]>(CLI_ARGS)

export type PayloadCliArgs = PayloadType<typeof action>

export default action
