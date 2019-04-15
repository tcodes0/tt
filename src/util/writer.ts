import fs from 'fs'
import util from 'util'
import os from 'os'
import child_process from 'child_process'
import { TRACKING_FILE } from './constants'
import fileExists from './fileExists'
import { JSObject } from './types'

const writeFile = util.promisify(fs.writeFile)
const mkdir = util.promisify(fs.mkdir)
const exec = util.promisify(child_process.exec)

export default async function writer(data: JSObject) {
  const ttFolder = `${os.homedir()}/.tt`
  if (!(await fileExists(ttFolder))) {
    await mkdir(ttFolder)
  }
  const str = JSON.stringify(data)
  await writeFile(`${ttFolder}/${TRACKING_FILE}`, str, 'utf-8')
  try {
    await exec(`yarn prettier --write ${ttFolder}/${TRACKING_FILE}`)
  } catch (error) {}
}
