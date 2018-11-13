import fs from "fs"
import { promisify } from "util"
import noop from "./noop"

// silence warning
const real = process.emitWarning
process.emitWarning = noop
const fsPromises = fs.promises
process.emitWarning = real

// fs.promises API added on Node v10
const fsPromisesProxy: typeof fsPromises = new Proxy(fsPromises || {}, {
  get: (FsPromises, prop: string) => {
    const fallback = (fs as any)[prop]

    if (/Sync/.test(prop)) {
      return fallback
    }
    if ((FsPromises as any)[prop] === undefined) {
      return fallback instanceof Function ? promisify(fallback) : fallback
    }
    return (FsPromises as any)[prop]
  },
})

export default fsPromisesProxy
