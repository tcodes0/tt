import { appendFileSync } from "fs"
import { ttDir, Object } from "."
import { execSync } from "child_process"
import { FunctionType, ArgType } from "./types"
import { historyFile } from "./constants"

export type AppendTtFile = FunctionType<typeof appendTtFile>

export default function appendTtFile(
  options: {
    path?: string
    opts?: ArgType<typeof appendFileSync>[2]
    log?: boolean
    file?: string
    data?: string | Object<any>
  } = {},
): void {
  const {
    path = ttDir,
    opts = "utf-8",
    log = false,
    file = historyFile,
    data = "{}",
  } = options
  const target = `${path}/${file}`
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data)

  try {
    appendFileSync(target, dataAsString, opts)
    // will likely fail if user uses only npm
    execSync(`yarn prettier --write ${target}`)
    return
  } catch (err) {
    if (log) {
      console.log(`writeTtFile error ${err.code}`, err)
    }
    throw err
  }
}
