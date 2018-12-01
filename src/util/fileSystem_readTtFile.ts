import { ttDir, FsArg, stateFile } from "."
import { statSync, readFileSync } from "fs"

export default function readFromTtDir(options: FsArg = {}) {
  const {
    path = ttDir,
    opts = "utf-8",
    log = false,
    file = stateFile,
  } = options
  const target = `${path}/${file}`

  try {
    const stats = statSync(target)
    const data = readFileSync(target, opts)
    const parsed = JSON.parse(data as string)
    return parsed
  } catch (err) {
    if (log) {
      console.log(`readTtFile error ${err.code}`, err)
    }
    if (err.code === "ENOENT") {
      return {}
    }
    throw err
  }
}
