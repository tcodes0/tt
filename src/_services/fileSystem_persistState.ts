import fsPromisesProxy from "../_utils/fsPromisesProxy";
import { ttDir } from "../_utils/constants";

/**
 * write arg to ~/.tt/state.json
 */
export default function persistState(
  writeFile = fsPromisesProxy.writeFile,
  path = `${ttDir}/state.json`,
  data = "\n"
) {
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data);
  return writeFile(path, dataAsString).catch(err => {
    throw err;
  });
}
