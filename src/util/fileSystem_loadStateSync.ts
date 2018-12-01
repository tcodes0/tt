import { readFileSync } from "fs"
import { rootReducer, replaceReducer } from "../core"
import { ttDir, stateFile, FsOptions } from "."

// @ts-ignore
const loadReducer = (stateFromDisk: any) => (state: any, action: any) => {
  return stateFromDisk
}

export default function loadState(
  path = ttDir,
  opts: FsOptions | string = "utf-8",
  readFile = readFileSync,
) {
  const statePath = `${path}/${stateFile}`
  let data, state

  try {
    console.log(`loading state from ${statePath}`)
    data = readFile(statePath, opts)
    state = JSON.parse(data as string)
    replaceReducer(loadReducer(state))
    replaceReducer(rootReducer)
    return state
  } catch (error) {
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
    throw error
  }
}
