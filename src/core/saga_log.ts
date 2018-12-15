import { production } from './../util'
import { take, select } from 'redux-saga/effects'

// :D
const disable = false
const collapse = false
const printAllActions = true
const printWholeState = true
const printSelectedState = false
const groupOption = collapse ? 'groupCollapsed' : 'group'

export default function* logActionsSaga() {
  const { NODE_ENV } = process.env
  if (!NODE_ENV || NODE_ENV === 'test' || NODE_ENV === production) {
    return
  }
  if (disable) {
    return
  }

  while (true) {
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
      `\n  //------------------\n  //${action.type}\n  //------------------\n`,
    )
    console.info('//dispatching\n', action, '\n')
    const nextState = yield select()
    printWholeState && console.log('//next state\n', nextState, '\n')
    // prettier-ignore
    const {
      cli,
      tasks
    } = nextState
    printSelectedState &&
      // prettier-ignore
      console.log("//selected state\n", {
        cli,
        tasks
      }, "\n")

    console.groupEnd()
  }
}
