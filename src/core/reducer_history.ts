import { Action, History } from '../util'
import { PayloadHistorySet, HISTORY_SET } from './action_historySet'
import { HISTORY_READ } from './action_historyRead'

type Payloads = PayloadHistorySet

const initialState: {
  history?: History
  reading: boolean
} = { history: undefined, reading: false }

export default function reducer(
  state = initialState,
  action: Action<Payloads>,
) {
  switch (action.type) {
    case HISTORY_SET: {
      const { history } = action.payload
      return { ...state, history }
    }
    case HISTORY_READ: {
      return { ...state, reading: true }
    }
    default:
      return state
  }
}
