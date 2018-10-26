import parseArguments from "./parseArguments"
import { bailout } from "../tool"
import { dispatch, action_shutdown } from "../core"
import modeNew from "./mode_new"
import modeInit from "./mode_init"
import loadStateSync from "../tool/fileSystem_loadStateSync"

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(argsOrMock: string[] = process.argv) {
  const operation = parseArguments(argsOrMock)

  switch (operation.mode) {
    case "dev":
      modeNew("foo")
      break
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `)
      break
    case "noArgs":
      bailout(`
      Please specify a few args.
      `)
      break
    case "new":
      loadStateSync()
      modeNew(operation.input)
      break
    case "init":
      modeInit()
      break
    default:
      break
  }

  dispatch(action_shutdown({}))
}
