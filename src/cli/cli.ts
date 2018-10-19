import parseArguments from "./parseArguments";
import bailout from "../_utils/bailout";
import { dispatch, getState } from "../_store";
// import stateWrite from "../state/action_write";
// import { fixture_ttDir } from "../_utils/constants";
import shutdown from "./action_shutdown";
import modeNew from "../modes/new";
import startRead from "../state/action_readStart";

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(argsOrMock: string[] = process.argv) {
  const operation = parseArguments(argsOrMock);

  switch (operation.mode) {
    case "dev":
      // console.log("Hi dev\n")
      // dispatch(toggleTracking());
      // dispatch(stateWrite({ path: fixture_ttDir }));
      dispatch(startRead());
      modeNew("foo");
      break;
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `);
      break;
    case "noArgs":
      // bailout(`
      // Please specify a few args.
      // `);
      break;
    case "new":
      dispatch(startRead());
      modeNew(operation.input);
      break;
    // default:
    //   break;
  }

  dispatch(shutdown({}));
}
