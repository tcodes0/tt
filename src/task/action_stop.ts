import { createAction } from "redux-actions";

export const TASK_STOP = "TASK_STOP";

export type PayloadT = { taskName?: string }

export default createAction<PayloadT>(TASK_STOP);
