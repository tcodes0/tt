import { createAction } from "redux-actions"
import { EmptyObject } from "../util"

export const FILES_INIT = "FILES_INIT"

export default createAction<EmptyObject>(FILES_INIT)
