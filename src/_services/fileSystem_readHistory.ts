import promises from "../_utils/fsPromisesProxy";
import { ttDir, historyFile } from "../_utils/constants";
import { optionsObject } from "../_utils/types";

export default async function readState(
  path = ttDir,
  opts: optionsObject | string = "utf-8",
  readFile = promises.readFile
) {
  const history = `${path}/${historyFile}`;

  try {
    await promises.stat(history);
    const data = await readFile(history, opts);
    return data;
  } catch (err) {
    console.log("readState error", err);
    if (err.code === "ENOENT") {
      return {};
    }
    throw err;
  }
}
