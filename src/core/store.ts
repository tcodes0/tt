import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./saga"
import { Object } from "../util"

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({
  collapsed: true,
  colors: false,
  titleFormatter: (action) => {
    const result = `\n  ------------------\n  ${
      action.type
    }\n  ------------------\n`
    return result
  },
})

export const createHydratedStore = (preloadedState: Object = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware, logger),
  )

const store = createHydratedStore()
sagaMiddleware.run(rootSaga)

export const { dispatch, getState, subscribe, replaceReducer } = store
export default store
