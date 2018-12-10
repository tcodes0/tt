import { createStore, applyMiddleware, Middleware, Reducer } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()

const middlewares: Middleware[] = []
middlewares.push(sagaMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export const { dispatch, getState, subscribe, replaceReducer } = store
export type State = typeof rootReducer extends Reducer<infer S> ? S : never
export default store
