import { EmptyObject } from "./../util/types"
import createAction from "../util/createAction"

export const MODE_INIT = "MODE_INIT"
export type PayloadInit = EmptyObject

export default createAction<EmptyObject>(MODE_INIT)
