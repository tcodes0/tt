import promises from "../_utils/fsPromisesProxy";
import { ttDir, historyFile } from "../_utils/constants";
import { OptionsT } from "../_utils/types";

export default async function readState(
  path = ttDir,
  opts: OptionsT | string = "utf-8",
  readFile = promises.readFile
) {
  const history = `${path}/${historyFile}`;

  try {
    await promises.stat(history);
    const data = await readFile(history, opts);
    return data;
  } catch (err) {
    console.log("readHistory error", err);
    if (err.code === "ENOENT") {
      return {};
    }
    throw err;
  }
}
