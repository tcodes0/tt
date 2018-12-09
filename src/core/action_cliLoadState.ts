import createAction from "../util/createAction"
import { ArgLoadState } from "../util"

export const CLI_LOAD_STATE = "CLI_LOAD_STATE"

export default createAction<ArgLoadState>(CLI_LOAD_STATE)
