import { bailout, loadState, Object } from "../util"
import { dispatch, cliShutdown, modeNew, setRoot, modeInit } from "../core"
import { parseArguments } from "."

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(
  argsOrMock: string[] = process.argv,
  options: Object = {},
) {
  // console.log("argsOrMock", argsOrMock)
  // console.log("options", options)

  const { mode, input, message } = parseArguments(argsOrMock)
  const { ttRoot } = options

  if (ttRoot) {
    dispatch(setRoot({ ttRoot }))
  }

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
      dispatch(modeInit({}))
      break

    default:
      break
  }

  dispatch(cliShutdown({}))
}
