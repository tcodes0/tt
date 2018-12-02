import { createAction } from "redux-actions"

export const CLI_SET_ROOT_DIR = "CLI_SET_ROOT_DIR"
export type CliSetRootType = { ttRoot: string }

export default createAction<{ ttRoot: string }>(CLI_SET_ROOT_DIR)
