import { createAction } from "redux-actions"
import { EmptyObject } from "../tool"

export const FILES_INIT = "FILES_INIT"

export default createAction<EmptyObject>(FILES_INIT)
