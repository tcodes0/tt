import { bailout, loadStateSync } from "../tool"
import { dispatch, action_shutdown } from "../core"
import { mode_new, mode_init, parseArguments } from "."

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(argsOrMock: string[] = process.argv) {
  const operation = parseArguments(argsOrMock)

  switch (operation.mode) {
    case "dev":
      mode_new("foo")
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
      mode_new(operation.input)
      break
    case "init":
      mode_init()
      break
    default:
      break
  }

  dispatch(action_shutdown({}))
}
