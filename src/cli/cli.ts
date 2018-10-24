import parseArguments from "./parseArguments";
import bailout from "../_utils/bailout";
import { dispatch } from "../_store";
// import stateWrite from "../state/action_write";
// import { fixture_ttDir } from "../_utils/constants";
import shutdown from "./action_shutdown";
import modeNew from "../modes/new";
import loadState from "../_services/fileSystem_loadState";
import newTask from "../task/action_new";

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(argsOrMock: string[] = process.argv) {
  const operation = parseArguments(argsOrMock);

  switch (operation.mode) {
    case "dev":
      loadState();
      dispatch(newTask({ name: "foo" }));
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
      loadState();
      modeNew(operation.input);
      break;
    // default:
    //   break;
  }

  dispatch(shutdown({}));
}
