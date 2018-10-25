import parseArguments from "./parseArguments";
import bailout from "../_utils/bailout";
import { dispatch } from "../_store";
import shutdown from "./action_shutdown";
import modeNew from "../modes/new";
import modeInit from "../modes/init";
import loadStateSync from "../_services/fileSystem_loadStateSync";

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(argsOrMock: string[] = process.argv) {
  const operation = parseArguments(argsOrMock);

  switch (operation.mode) {
    case "dev":
      modeNew("foo");
      break;
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `);
      break;
    case "noArgs":
      bailout(`
      Please specify a few args.
      `);
      break;
    case "new":
      loadStateSync();
      modeNew(operation.input);
      break;
    case "init":
      modeInit();
      break;
    default:
      break;
  }

  dispatch(shutdown({}));
}
