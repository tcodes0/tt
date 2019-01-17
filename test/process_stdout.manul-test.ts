import { dev_ttDir, defaultLogFile, ttStdout } from '../src/util'
import { mkdirSync, readFileSync } from 'fs'

const testDir = `${dev_ttDir}-process_stdout.test`

mkdirSync(testDir, { recursive: true })
process.chdir(testDir)

const mock = {
  calledWith: 'nothing',
  stdout: function(data: any, callback: (e?: Error) => void | never) {
    this.calledWith = data
    callback()
    return true
  },
  reset: function() {
    this.calledWith = 'nothing'
  },
}

let original: typeof process.stdout.write
const apply = () => {
  original = process.stdout.write
  // @ts-ignore
  process.stdout.write = mock.stdout.bind(mock)
}
const unapply = () => {
  process.stdout.write = original
}

const print_test = async () => {
  console.log('\nTEST - prints to stdout')
  const input = 'foo'
  apply()
  await ttStdout(input)
  unapply()

  const expected = `${input}\n`
  if (mock.calledWith !== expected) {
    throw `expected mock to be called with ${expected} but it was called with ${
      mock.calledWith
    }`
  }
  console.log('OK')
  mock.reset()
}

const default_path_test = async () => {
  console.log('\nTEST - prints to log file, default path')
  const input = 'bar'
  const expected = `${input}\n`
  await ttStdout(input, null)

  const result = readFileSync(`${testDir}/${defaultLogFile}`, 'utf-8')
  if (result !== expected) {
    throw `expected to read ${expected} in file ${testDir}/${defaultLogFile}`
  }
  console.log('OK')
}

const custom_path = async () => {
  console.log('\nTEST - prints to log file, custom path')
  const input = 'baz'
  const expected = `${input}\n`
  const expectedFile = 'baz.txt'
  await ttStdout(input, expectedFile)

  const result = readFileSync(`${testDir}/${expectedFile}`, 'utf-8')
  if (result !== expected) {
    throw `expected to read ${expected} in file ${testDir}/${expectedFile}`
  }
  console.log('OK')
}

const main = async () => {
  try {
    await print_test()
    await default_path_test()
    await custom_path()
  } catch (error) {
    console.error('FAIL')
    console.error(error)
  }
}
main()
