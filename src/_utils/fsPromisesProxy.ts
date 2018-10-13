import fs from "fs";
import { promisify } from "util";
import noop from "./noop";

// silence warning
const real = process.emitWarning;
process.emitWarning = noop;
const fsPromises = fs.promises;
process.emitWarning = real;

export type FsPromisesLike = typeof fsPromises & {};
const availableInNode = fsPromises || {};

// fs.promises API added on Node v10
const fsPromisesProxy = new Proxy(availableInNode as FsPromisesLike, {
  get: (FsPromises, prop) => {
    // @ts-ignore
    const fallback = fs[prop];

    // @ts-ignore
    if (/Sync/.test(prop)) return fallback;
    // @ts-ignore
    if (FsPromises[prop] === undefined) {
      return fallback instanceof Function ? promisify(fallback) : fallback;
    }
    // @ts-ignore
    return FsPromises[prop];
  }
});

export default fsPromisesProxy;
