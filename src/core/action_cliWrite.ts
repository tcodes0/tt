import createAction from "../util/createAction"
import { WriteTtFile } from "../util"

export const CLI_WRITE = "CLI_WRITE"
export type PayloadWrite = WriteTtFile["args"][0]

export default createAction<WriteTtFile["args"][0]>(CLI_WRITE)
