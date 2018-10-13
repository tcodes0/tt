import promises from "../_utils/fsPromisesProxy";
import { ttDir, stateFile } from "../_utils/constants";

export default async function readState(
  path = ttDir,
  opts = "utf-8",
  readFile = promises.readFile
) {
  const state = path + "/" + stateFile;

  try {
    await promises.stat(state);
    const data = await readFile(state, opts);
    return data;
  } catch (err) {
    console.log("readState error", err);
    if (err.code === "ENOENT") {
      return {};
    }
    throw err;
  }
}
