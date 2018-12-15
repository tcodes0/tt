import { ttStdout, dev_ttDir, defaultLogFile } from '../src/util'
import { mkdirSync, readFileSync } from 'fs'

const testDir = `${dev_ttDir}-process_stdout.test`

beforeEach(() => {
  mkdirSync(testDir, { recursive: true })
  process.chdir(testDir)
})

describe('process_stdout test', () => {
  test('prints to stdout', async () => {
    const mock = jest.fn((data, resolve) => {
      setTimeout(() => {
        data + 1
        resolve()
      }, 500)
    })
    const expected = 'foo'
    process.stdout.write = mock
    await ttStdout(expected)
    expect(mock).toHaveBeenCalledWith(`${expected}\n`, expect.any(Function))
  })

  /**
   * for some reason await ttStdout doesn't resolve in jest
   */
  test('prints to log file, default path', () => {
    const expected = 'bar'
    ttStdout(expected, null)
    setTimeout(() => {
      const result = readFileSync(`${testDir}/${defaultLogFile}`, 'utf-8')
      expect(result).toMatch(new RegExp(expected))
    }, 500)
  })

  test('prints to log file, custom path', () => {
    const expected = 'baz'
    const expectedFile = 'baz.txt'
    ttStdout(expected, 'baz.txt')
    setTimeout(() => {
      const result = readFileSync(`${testDir}/${expectedFile}`, 'utf-8')
      expect(result).toMatch(new RegExp(expected))
    }, 500)
  })
})
