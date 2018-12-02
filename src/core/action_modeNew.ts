import { createAction } from "redux-actions"

export const MODE_NEW = "MODE_NEW"

export default createAction<{ name: string }>(MODE_NEW)
