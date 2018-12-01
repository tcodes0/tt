import { promises, ttDir, historyFile, FsOptions, FsArg } from "."
import { statSync, readFileSync } from "fs"

export default async function readState(options: FsArg = {}) {
  const { path = ttDir, opts = "utf-8", log = false } = options
  const history = `${path}/${historyFile}`

  try {
    const stats = statSync(history)
    const data = readFileSync(history, opts)
    const parsed = await JSON.parse(data as string)
    return parsed
  } catch (err) {
    if (log) {
      console.log("readHistory error", err)
    }
    if (err.code === "ENOENT") {
      return {}
    }
    throw err
  }
}
