import {
  promiseStat,
  home,
  promiseWriteFile,
  ttDir,
  promiseReadFile
} from "./utils";
import fs from "fs";

const historyPush = () => {
  return "I push to history";
};

const historyRead = () => {
  return readState(undefined, `${ttDir}/history.json`);
};

const historyPrint = () => {
  return "I Print the history to cli";
};

/**
 * write arg to ~/.tt/state.json
 */
export const persistState = (
  writeFile = promiseWriteFile,
  path = `${ttDir}/state.json`,
  data = "\n"
) => writeFile(path, data).catch(err => throw err);

/**
 * look for ~/.tt/state.json
 * if found, read it, return result
 * else return {}
 */
export const readState = (
  readFile = promiseReadFile,
  path = `${ttDir}/state.json`,
  opts = "utf-8"
) =>
  new Promise((resolve, reject) => {
    promiseStat(path).catch(err => {
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
  mkdir = fs.mkdir,
  path = `${home}/.tt`,
  writeFile = promiseWriteFile,
  files = ["ttrc.json", "history.json", "state.json"]
) => {
  try {
    await promiseStat(path);
  } catch (err) {
    if (err.code === "ENOENT") {
      mkdir(path, err => err && throw err);
      return;
    }
    throw err;
  }

  Promise.all(files.map(file => writeFile(`${path}/${file}`, "\n"))).catch(
    err => throw err
  );
};

export default {
  historyPush,
  historyRead,
  historyPrint,
  persistState,
  readState,
  initTTFiles
};
