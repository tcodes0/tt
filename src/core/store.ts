import { createStore, applyMiddleware, Middleware } from "redux"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./saga"
import { Object, production } from "../util"

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

const middlewares: Middleware[] = []
middlewares.push(sagaMiddleware)

const {
  env: { NODE_ENV },
} = process
if (NODE_ENV !== "test" && NODE_ENV !== production) {
  middlewares.push(logger)
}

export const createHydratedStore = (preloadedState: Object = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))

const store = createHydratedStore()
sagaMiddleware.run(rootSaga)

export const { dispatch, getState, subscribe, replaceReducer } = store
export default store
