import os from "os";
import fs from "fs";
import { promisify } from "util";

export const home = os.homedir();
export const ttDir = `${os.homedir()}/.tt`;

// fs.promises API added on Node v10
export const fsPromisesProxy = new Proxy(fs.promises || {}, {
  get: (FsPromises, prop) => {
    const fallback = fs[prop];

    if (/Sync/.test(prop)) return fallback;
    if (FsPromises[prop] === undefined) {
      return fallback instanceof Function ? promisify(fallback) : fallback;
    }
    return FsPromises[prop];
  }
});
