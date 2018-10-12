import { createLogger } from "redux-logger";

const middleware = createLogger({
  collapsed: true,
  colors: false,
  titleFormatter: action => {
    const result = `\n  ${action.type}`;
    return result;
  }
});

export default middleware;
