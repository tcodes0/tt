import { bailout, loadState, Object } from "../util"
import { dispatch, cliShutdown, modeNew } from "../core"
import { mode_init, parseArguments } from "."

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(
  argsOrMock: string[] = process.argv,
  options: Object = {},
) {
  const { mode, input, message } = parseArguments(argsOrMock)
  //@ts-ignore
  const { root } = options

  switch (mode) {
    case "dev":
      // modeNew({ name: "foo" })
      break

    case "parseErr":
      bailout(`
      ${message}
      Failed with: ${input}
      `)
      break

    case "noArgs":
      bailout(`
      Please specify a few args.
      `)
      break

    case "new":
      loadState()
      modeNew(input)
      break

    case "init":
      mode_init()
      break

    default:
      break
  }

  dispatch(cliShutdown({}))
}
