import { promiseStat, home, promiseWriteFile } from "./utils";
import fs from "fs";

const historyPush = () => {
  return "I push to history";
};

const historyRead = () => {
  return "I read the history";
};

const historyPrint = () => {
  return "I Print the history to cli";
};

const persistState = () => {
  return "I write the state object to JSON";
};

const readState = () => {
  return "I read the state object from a JSON file";
};

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
    if (err && err.code === "ENOENT") {
      mkdir(path, err => err && throw err);
      return;
    }
    throw err;
  }

  try {
    for (const file of files) {
      await writeFile(`${path}/${file}`, "\n");
    }
  } catch (err) {
    // console.log(err);
    throw err;
  }
  return;
};

export default {
  historyPush,
  historyRead,
  historyPrint,
  persistState,
  readState,
  initTTFiles
};
