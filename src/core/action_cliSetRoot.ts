import createAction from "../util/createAction"
import { PayloadType } from "../util"

export const CLI_SET_ROOT_DIR = "CLI_SET_ROOT_DIR"

const action = createAction<{ ttRoot: string }>(CLI_SET_ROOT_DIR)

export type PayloadSetRoot = PayloadType<typeof action>

export default action
