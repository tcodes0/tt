import { createLogger } from "redux-logger";

const middleware = createLogger({
  collapsed: true,
  colors: false,
  titleFormatter: action => {
    const result = `\n  ------------------\n  ${
      action.type
    }\n  ------------------\n`;
    return result;
  }
});

export default middleware;
