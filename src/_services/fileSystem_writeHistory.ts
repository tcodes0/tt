import promises from "../_utils/fsPromisesProxy";
import { ttDir, historyFile } from "../_utils/constants";

export default function writeState(
  data = "\n",
  path = ttDir,
  writeFile = promises.writeFile
) {
  const history = `${path}/${historyFile}`;
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data);

  return writeFile(history, dataAsString).catch(err => {
    console.log("writeHistory error", err);
    throw err;
  });
}
