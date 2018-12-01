import { createAction } from "redux-actions"
import { EmptyObject } from "../util"

export const TASK_SUMMARY = "TASK_SUMMARY"

export default createAction<EmptyObject>(TASK_SUMMARY)
