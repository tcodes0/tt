import { createAction } from "redux-actions";
import { EmptyObject } from "../_utils/types";

export const CLI_SHUTDOWN = "CLI_SHUTDOWN";

export default createAction<EmptyObject>(CLI_SHUTDOWN);
