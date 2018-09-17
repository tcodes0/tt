import os from "os";
import fs from "fs";

export const home = os.homedir();

export const promiseStat = path =>
  new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) {
        reject(err);
      }
      if (stat) {
        resolve(stat);
      }
    });
  });

export const promiseWriteFile = (path, data, opts) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, err => {
      err ? reject(err) : resolve();
    });
  });
