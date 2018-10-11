import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const customLogger = createLogger({ collapsed: true });

export const createHydratedStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(customLogger)
  );

export const store = createHydratedStore();
