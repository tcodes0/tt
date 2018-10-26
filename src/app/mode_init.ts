import { dispatch, action_init } from "../core"

export default function() {
  dispatch(action_init({}))
  return
}
