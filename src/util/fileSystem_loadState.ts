import { readFileSync } from "fs"
import { rootReducer, replaceReducer } from "../core"
import { ttDir, stateFile, FsOptions } from "."

// @ts-ignore
const load = (stateFromDisk: any) => (state: any, action: any) => {
  return stateFromDisk
}

export default function loadState(
  options: {
    path?: string
    opts?: FsOptions | string
    log?: boolean
    file?: string
  } = {},
) {
  const {
    path = ttDir,
    opts = "utf-8",
    log = false,
    file = stateFile,
  } = options
  const statePath = `${path}/${file}`

  let data, state
  try {
    if (log) {
      console.log(`loading state from ${statePath}`)
    }

    data = readFileSync(statePath, opts)
    state = JSON.parse(data as string)
    // put fake reducer that will return state from disk
    replaceReducer(load(state))
    // put real reducer back
    replaceReducer(rootReducer)
    return state
  } catch (error) {
    if (log) {
      console.error(
        "error loading state from disk\n",
        "data is ",
        data,
        "\n",
        "state is ",
        state,
        "\n",
        error,
        "\n",
      )
    }

    throw error
  }
}
