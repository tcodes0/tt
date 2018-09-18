import os from "os";
import fs from "fs";

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
