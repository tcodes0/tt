import { EmptyObject } from "./../util/types"
import { createAction } from "redux-actions"

export const MODE_INIT = "MODE_INIT"
export type InitType = EmptyObject

export default createAction<EmptyObject>(MODE_INIT)
