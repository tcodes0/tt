import { promises, ttDir, historyFile } from "."
import { execSync } from "child_process"

export default function writeState(
  data = "\n",
  path = ttDir,
  writeFile = promises.writeFile,
) {
  const history = `${path}/${historyFile}`
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data)

  return writeFile(history, dataAsString)
    .then(() => execSync(`yarn prettier --write ${history}`)) // will likely fail if user uses only npm
    .catch((err) => {
      console.log("writeState error", err)
      throw err
    })
}
