import { createAction } from "redux-actions"
import { EmptyObject } from "../util"

export const CLI_SET_CALL_TIME = "CLI_SET_CALL_TIME"

export default createAction<EmptyObject>(CLI_SET_CALL_TIME)
