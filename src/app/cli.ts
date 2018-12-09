import { bailout } from "../util"
import {
  dispatch,
  cliShutdown,
  modeNew,
  setRoot,
  modeInit,
  loadState,
} from "../core"
import { parseArguments } from "."

export type ArgsCli = typeof cli extends (...a: infer A) => any ? A : never

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(
  argsOrMock: string[] = process.argv,
  options: {
    ttRoot?: string
    log?: boolean
  } = {},
) {
  // console.log("argsOrMock", argsOrMock)
  // console.log("options", options)

  const { mode, input, message } = parseArguments(argsOrMock)
  const { ttRoot, log } = options

  if (ttRoot) {
    dispatch(setRoot({ ttRoot }))
  }

  switch (mode) {
    case "dev":
      console.log("Hi")
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
      dispatch(loadState({ path: ttRoot, log }))
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
