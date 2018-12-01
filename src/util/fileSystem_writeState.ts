import { promises, ttDir, stateFile } from "."
import { execSync } from "child_process"

export default function writeState(
  data = "\n",
  path = ttDir,
  writeFile = promises.writeFile,
) {
  const state = `${path}/${stateFile}`
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data)

  return writeFile(state, dataAsString)
    .then(() => execSync(`yarn prettier --write ${state}`))
    .catch((err) => {
      console.log("writeState error", err)
      throw err
    })
}
