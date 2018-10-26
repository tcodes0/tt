import { promises, ttDir, historyFile, FsOptions } from "."

export default async function readState(
  path = ttDir,
  opts: FsOptions | string = "utf-8",
  readFile = promises.readFile,
) {
  const history = `${path}/${historyFile}`

  try {
    await promises.stat(history)
    const data = await readFile(history, opts)
    return data
  } catch (err) {
    console.log("readHistory error", err)
    if (err.code === "ENOENT") {
      return {}
    }
    throw err
  }
}
