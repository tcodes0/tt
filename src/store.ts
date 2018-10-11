import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const customLogger = createLogger({ collapsed: true });

export const createHydratedStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, customLogger)
  );

export const store = createHydratedStore();
