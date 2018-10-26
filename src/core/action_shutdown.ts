import { createAction } from "redux-actions"
import { EmptyObject } from "../tool"

export const CLI_SHUTDOWN = "CLI_SHUTDOWN"

export default createAction<EmptyObject>(CLI_SHUTDOWN)
