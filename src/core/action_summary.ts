import { createAction } from "redux-actions"
import { EmptyObject } from "../tool"

export const TASK_SUMMARY = "TASK_SUMMARY"

export default createAction<EmptyObject>(TASK_SUMMARY)
