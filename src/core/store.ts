import { createStore, applyMiddleware, Middleware, Reducer } from "redux"
// import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./saga"
import { Object, production } from "../util"

const sagaMiddleware = createSagaMiddleware()
// const logger = createLogger({
//   collapsed: true,
//   colors: false,
//   titleFormatter: (action) => {
//     const result = `\n  ------------------\n  ${
//       action.type
//     }\n  ------------------\n`
//     return result
//   },
// })

const middlewares: Middleware[] = []
middlewares.push(sagaMiddleware)

const { env } = process
const { NODE_ENV } = env
// console.log("env", NODE_ENV)
if (NODE_ENV && NODE_ENV !== "test" && NODE_ENV !== production) {
  // middlewares.push(logger)
}

export const createHydratedStore = (preloadedState: Object = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))

const store = createHydratedStore()
sagaMiddleware.run(rootSaga)

export const { dispatch, getState, subscribe, replaceReducer } = store
export type State = typeof rootReducer extends Reducer<infer S> ? S : never
export default store
