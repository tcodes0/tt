import { createWriteStream, WriteStream } from 'fs'
import { defaultLogFile } from './constants'
import { resolve } from 'path'

/**
 * @param data data to write to stdout + \n
 */
export function ttStdout(data: string | number): Promise<void>
/**
 * @param data Data to write to stdout + \n
 * @param path Path to log file to append data to. Null defaults to ./ttOutput.txt. Relative to $PWD.
 */
export function ttStdout(
  data: string | number,
  path: string | null,
): Promise<void>
export function ttStdout(data: string | number, path?: string | null) {
  const stringData = `${String(data)}\n`
  const stdoutPromise = new Promise<void>((resolve, reject) => {
    process.stdout.write(stringData, (e: Error) => {
      if (e) {
        reject(e)
      }
      resolve()
    })
  })

  if (path === undefined) {
    return stdoutPromise
  }
  const ttStream =
    path === null
      ? createWriteStream(defaultLogFile)
      : createWriteStream(resolve(path))

  const logFilePromise = new Promise<void>((resolve, reject) => {
    ttStream.on('error', e => {
      reject(e)
    })
    ttStream.write(stringData, e => {
      if (!e) {
        resolve()
      }
    })
  })

  return Promise.all([logFilePromise, stdoutPromise])
}

export default ttStdout
