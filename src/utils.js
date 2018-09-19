import os from "os";
import fs from "fs";
import { promisify } from "util";

export const home = os.homedir();
export const ttDir = `${os.homedir()}/.tt`;

export const promiseStat = path =>
  new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });

export const promiseWriteFile = (path, data, opts) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, err => {
      err ? reject(err) : resolve();
    });
  });
export const promiseReadFile = (path, opts) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });

// fs.promises API added on Node v10
export const promises = new Proxy(fs.promises || {}, {
  get: (FsPromises, prop) => {
    const fallback = fs[prop];

    if (/Sync/.test(prop)) return fallback;
    if (FsPromises[prop] === undefined) {
      return fallback instanceof Function ? promisify(fallback) : fallback;
    }
    return FsPromises[prop];
  }
});
