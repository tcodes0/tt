import createAction from "../util/createAction"
import { LoadState } from "../util"

export const CLI_LOAD_STATE = "CLI_LOAD_STATE"
export type PayloadLoadState = LoadState["args"][0]

export default createAction<LoadState["args"][0]>(CLI_LOAD_STATE)
