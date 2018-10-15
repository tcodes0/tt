import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer_root";
import rootSaga from "./saga_root";
import logger from "./middleware_logger";
import saga from "./middleware_saga";

export type State = { [key: string]: any };
export const createHydratedStore = (preloadedState: State = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(saga, logger));

const store = createHydratedStore();
saga.run(rootSaga);

export const { dispatch, getState, subscribe, replaceReducer } = store;
export default store;
