import promises from "../_utils/fsPromisesProxy";
import { ttDir, stateFile } from "../_utils/constants";

export default function writeState(
  data = "\n",
  path = ttDir,
  writeFile = promises.writeFile
) {
  const state = path + "/" + stateFile;
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data);

  return writeFile(state, dataAsString).catch(err => {
    console.log("writeState error", err);
    throw err;
  });
}
