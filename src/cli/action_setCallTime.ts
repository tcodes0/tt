import { createAction } from "redux-actions";
import { EmptyObject } from "../_utils/types";

export const CLI_SET_CALL_TIME = "CLI_SET_CALL_TIME";

export default createAction<EmptyObject>(CLI_SET_CALL_TIME);
