import createAction from "../util/createAction"

export const PRINT_LOG = "PRINT_LOG"

export type PayloadLog = {
  what: "today" | "week" | "month" | "all" | "last"
}

export default createAction<{
  what: "today" | "week" | "month" | "all" | "last"
}>(PRINT_LOG)
