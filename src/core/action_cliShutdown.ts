import createAction from "../util/createAction"
import { EmptyObject } from "../util"

export const CLI_SHUTDOWN = "CLI_SHUTDOWN"

export default createAction<EmptyObject>(CLI_SHUTDOWN)
