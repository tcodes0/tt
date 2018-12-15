import { bailout, FunctionType } from "../util"
import {
  dispatch,
  cliShutdown,
  modeNew,
  setRoot,
  modeInit,
  loadState,
  cliArgs,
  modeStop,
} from "../core"
import { parser } from "."

export type Cli = FunctionType<typeof cli>

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(
  argsOrMock = process.argv,
  options: {
    ttRoot?: string
    log?: boolean
  } = {},
) {
  // console.log("argsOrMock", argsOrMock)
  // console.log("options", options)

  dispatch(cliArgs(argsOrMock))
  const { mode, input, message } = parser(argsOrMock)
  const { ttRoot, log } = options
  dispatch(loadState({ path: ttRoot, log }))
  if (ttRoot) {
    dispatch(setRoot({ ttRoot }))
  }

  switch (mode) {
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
      dispatch(modeNew({ name: input[0] }))
      break

    case "init":
      dispatch(modeInit())
      break

    case "stop":
      dispatch(modeStop())
      break

    default:
      break
  }

  dispatch(cliShutdown())
}
