import { writeFileSync } from "fs"
import { ttDir, stateFile, FsOptions, Object } from "."
import { execSync } from "child_process"

let attempedPaths: string[] = []

export default function writeTtFile(
  options: {
    path?: string
    opts?: FsOptions | string
    log?: boolean
    file?: string
    data?: string | Object
  } = {},
): void {
  const {
    path = ttDir,
    opts = "utf-8",
    log = false,
    file = stateFile,
    data = "{}",
  } = options
  const target = `${path}/${file}`
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data)

  try {
    writeFileSync(target, dataAsString, opts)
    // will likely fail if user uses only npm
    execSync(`yarn prettier --write ${target}`)
    return
  } catch (err) {
    if (log) {
      console.log(`writeTtFile error ${err.code}`, err)
    }
    if (err.code === "ENOENT" && !attempedPaths.includes(path)) {
      attempedPaths.push(path)
      execSync(`mkdir -p ${path}`)
      return writeTtFile(options)
    }
    throw err
  }
}

export type WriteTtFileArgs = typeof writeTtFile extends (
  options: infer O,
) => void
  ? O
  : never
