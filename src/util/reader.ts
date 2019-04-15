import fs from 'fs'
import util from 'util'
import os from 'os'
import { TRACKING_FILE } from './constants'
import fileExists from './fileExists'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mkdir = util.promisify(fs.mkdir)

export default async function reader() {
  const ttFolder = `${os.homedir()}/.tt`
  if (!(await fileExists(ttFolder))) {
    await mkdir(ttFolder)
  }

  let data = null
  try {
    data = await readFile(`${ttFolder}/${TRACKING_FILE}`, 'utf-8')
    data = JSON.parse(data)
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(
        `${ttFolder}/${TRACKING_FILE}`,
        JSON.stringify({ sprints: [] }),
        'utf-8',
      )
    }
  }
  return data
}
