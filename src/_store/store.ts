import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import logger from "./middleware_logger";
import saga from "./middleware_saga";

export type State = { [key: string]: any };
export const createHydratedStore = (preloadedState: State = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(saga, logger));

const store = createHydratedStore();
saga.run(rootSaga);

export const { dispatch, getState, subscribe, replaceReducer } = store;
export default store;
