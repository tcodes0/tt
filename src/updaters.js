import fsPromisesProxy from "./utils/fsPromisesProxy";
import { home, ttDir } from "./utils/constants";

const promises = fsPromisesProxy;

export const pushHistory = async task => {
  const history = await readHistory();
  history.pushHistory(task);
  persistState(undefined, `${ttDir}/history.json`, history);
};

export const readHistory = () => {
  return readState(undefined, `${ttDir}/history.json`);
};

export const printHistory = () => {
  return "I Print the history to cli";
};

/**
 * write arg to ~/.tt/state.json
 */
export const persistState = (
  writeFile = promises.writeFile,
  path = `${ttDir}/state.json`,
  data = "\n"
) => {
  const dataAsString = typeof data === "string" ? data : JSON.stringify(data);
  return writeFile(path, dataAsString).catch(err => throw err);
};

/**
 * look for ~/.tt/state.json.
 * If found, read it and return result.
 * Else return {}
 */
export const readState = (
  readFile = promises.readFile,
  path = `${ttDir}/state.json`,
  opts = "utf-8"
) =>
  new Promise((resolve, reject) => {
    promises.stat(path).catch(err => {
      if (err.code === "ENOENT") {
        resolve({});
      }
      reject(err);
    });
    readFile(path, opts).then(data => resolve(data));
  });

/**
 * initTTFiles() - create default files with defaults
 *  if not tt folder, create it
 *  if not tt files, create them
 *  else globber them with default values
 */
export const initTTFiles = async (
  mkdir = promises.mkdir,
  path = `${home}/.tt`,
  writeFile = promises.writeFile,
  files = ["ttrc.json", "history.json", "state.json"]
) => {
  try {
    await promises.stat(path);
  } catch (err) {
    if (err.code === "ENOENT") {
      mkdir(path).catch(err => err && throw err);
      return;
    }
    throw err;
  }

  Promise.all(files.map(file => writeFile(`${path}/${file}`, "\n"))).catch(
    err => throw err
  );
};

export default {
  pushHistory,
  readHistory,
  printHistory,
  persistState,
  readState,
  initTTFiles
};
