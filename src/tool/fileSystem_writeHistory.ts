import { promises, ttDir, historyFile } from "."

export default function writeState(
  data = "\n",
  path = ttDir,
  writeFile = promises.writeFile,
) {
  const history = `${path}/${historyFile}`
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data)

  return writeFile(history, dataAsString).catch((err) => {
    console.log("writeHistory error", err)
    throw err
  })
}
