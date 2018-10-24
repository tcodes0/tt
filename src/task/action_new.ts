import { createAction } from "redux-actions";

export const TASK_NEW = "TASK_NEW";

export type PayloadT = { name: string };

export default createAction<PayloadT>(TASK_NEW);
