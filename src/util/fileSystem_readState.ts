import { promises, ttDir, stateFile, FsOptions } from "."

export default async function readState(
  path = ttDir,
  opts: FsOptions | string = "utf-8",
  readFile = promises.readFile,
) {
  const state = `${path}/${stateFile}`

  try {
    await promises.stat(state)
    const data = await readFile(state, opts)
    return data
  } catch (err) {
    console.log("readState error", err)
    if (err.code === "ENOENT") {
      return {}
    }
    throw err
  }
}
