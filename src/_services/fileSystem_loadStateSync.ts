import rootReducer from "../_store/reducer_root";
import { replaceReducer } from "../_store";
import { ttDir, stateFile } from "../_utils/constants";
import { FsOptions } from "../_utils/types";
import { readFileSync } from "fs";

// @ts-ignore
const loadReducer = (stateFromDisk: any) => (state: any, action: any) => {
  return stateFromDisk;
};

export default function loadState(
  path = ttDir,
  opts: FsOptions | string = "utf-8",
  readFile = readFileSync
) {
  const statePath = `${path}/${stateFile}`;
  let data, state;

  try {
    console.log(`loading state from ${statePath}`);
    data = readFile(statePath, opts);
    state = JSON.parse(data as string);
    replaceReducer(loadReducer(state));
    replaceReducer(rootReducer);
    return state;
  } catch (error) {
    console.error("error loading state from disk\n", error, "\n");
    console.log("data\n", data);
    console.log("state\n", state);
    throw error;
  }
}
