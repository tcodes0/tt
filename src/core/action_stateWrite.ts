import createAction from "../util/createAction"

export const STATE_WRITE = "STATE_WRITE"

export type PayloadWrite = { path?: string }

export default createAction<PayloadWrite>(STATE_WRITE)
