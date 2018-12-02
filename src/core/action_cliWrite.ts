import { createAction } from "redux-actions"
import { WriteTtFileArgs } from "../util"

export const CLI_WRITE = "CLI_WRITE"

export default createAction<WriteTtFileArgs>(CLI_WRITE)
