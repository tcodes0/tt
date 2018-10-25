import { createAction } from "redux-actions";
import { EmptyObject } from "../_utils/types";

export const FILES_INIT = "FILES_INIT";

export default createAction<EmptyObject>(FILES_INIT);
