import { ttDir, stateFile, ReadFileSyncArg2 } from '.'
import { statSync, readFileSync } from 'fs'
import { FunctionType, Object } from './types'

export type ReadTtFile = FunctionType<typeof readTtFile>

export default function readTtFile(
  options: {
    path?: string
    opts?: ReadFileSyncArg2 | string
    log?: boolean
    file?: string
  } = {},
): Object<any> {
  const {
    path = ttDir,
    opts = 'utf-8',
    log = false,
    file = stateFile,
  } = options
  const target = `${path}/${file}`

  try {
    // @ts-ignore
    const stats = statSync(target)
    const data = readFileSync(target, opts)
    const parsed = JSON.parse(data as string)
    return parsed
  } catch (err) {
    if (log) {
      console.log(`readTtFile error ${err.code}`, err)
    }
    if (err.code === 'ENOENT') {
      return {}
    }
    throw err
  }
}
