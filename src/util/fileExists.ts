import fs from 'fs'
import util from 'util'

const statFile = util.promisify(fs.stat)

export default async function fileExists(path: string) {
  let result
  try {
    result = await statFile(path)
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false
    }
    throw error
  }
  return result
}
