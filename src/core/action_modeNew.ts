import createAction from "../util/createAction"

export const MODE_NEW = "MODE_NEW"
export type PayloadNew = { name: string }

export default createAction<{ name: string }>(MODE_NEW)
