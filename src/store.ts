import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const customLogger = createLogger({ collapsed: true });

export type State = { [key: string]: any };
export const createHydratedStore = (preloadedState: State = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(customLogger));

const store = createHydratedStore();
export const { dispatch, getState, subscribe, replaceReducer } = store;
export default store;
