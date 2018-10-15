import parseArguments from "./parseArguments";
import bailout from "../_utils/bailout";
import { dispatch } from "../_store";
import stateWrite from "../state/action_write";
import { fixture_ttDir } from "../_utils/constants";
import shutdown from "./action_shutdown";
import newTask from "../modes/new";
import readState from "../state/action_read";

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
      dispatch(stateWrite({ path: fixture_ttDir }));
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
      dispatch(readState());
      newTask(operation.input);
      break;
    // default:
    //   break;
  }

  dispatch(shutdown());
}
