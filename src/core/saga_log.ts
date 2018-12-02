import { production } from "./../util"
import { take, select } from "redux-saga/effects"

// :D
const disable = false
const collapse = false
const printAllActions = true
const printWholeState = true
const printSelectedState = false
const groupOption = collapse ? "groupCollapsed" : "group"

export default function* logActionsSaga() {
  const { env } = process
  const { NODE_ENV } = env
  if (!(NODE_ENV && NODE_ENV !== "test" && NODE_ENV !== production)) {
    return
  }

  while (true) {
    if (disable) {
      return
    }
    const action = yield take((ac: any) => {
      const ignore: string[] = []
      const only: string[] = []

      if (!printAllActions && !only.includes(ac.type)) {
        return false
      }

      if (!printAllActions && ignore.includes(ac.type)) {
        return false
      }

      return true
    })

    console[groupOption]()

    console.log(
      `\n  ------------------\n  ${action.type}\n  ------------------\n`,
    )
    console.info("dispatching", action, "\n")
    const nextState = yield select()
    printWholeState && console.log("next state", nextState, "\n")
    // prettier-ignore
    const {
      cli,
      tasks
    } = nextState
    printSelectedState &&
      // prettier-ignore
      console.log("selected state", {
        cli,
        tasks
      }, "\n")

    console.groupEnd()
  }
}
