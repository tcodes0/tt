import { createAction } from "redux-actions"

export const STATE_WRITE = "STATE_WRITE"

export type PayloadActionWrite = { path?: string }

export default createAction<PayloadActionWrite>(STATE_WRITE)
