import { createAction } from "redux-actions";
import { EmptyObject } from "../_utils/types";

export const TASK_SUMMARY = "TASK_SUMMARY";

export default createAction<EmptyObject>(TASK_SUMMARY);
