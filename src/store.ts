import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const customLogger = createLogger({
  collapsed: true,
  colors: false,
  titleFormatter: action => {
    const result = `\n  ${action.type}`;
    return result;
  }
});

export type State = { [key: string]: any };
export const createHydratedStore = (preloadedState: State = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware, customLogger)
  );

const store = createHydratedStore();
sagaMiddleware.run(rootSaga);

export const { dispatch, getState, subscribe, replaceReducer } = store;
export default store;
