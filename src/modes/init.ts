import init from "../files/action_init";
import { dispatch } from "../_store";

export default function() {
  dispatch(init({}));
  return;
}
