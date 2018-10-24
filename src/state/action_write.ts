import { createAction } from "redux-actions";

export const STATE_WRITE = "STATE_WRITE";

export type PayloadT = { path?: string };

export default createAction<PayloadT>(STATE_WRITE);
