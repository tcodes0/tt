import { readTtFile, dev_ttDir } from '../src/util'
import { writeFileSync } from 'fs'
import { execSync } from 'child_process'

const testDir = `${dev_ttDir}-readTtFile.test`

beforeAll(() => {
  execSync(`mkdir -p ${testDir}`)
})

describe('readTtFile test', () => {
  test('it works with path and reads history', () => {
    const expected = { history: true }
    writeFileSync(`${testDir}/history.json`, JSON.stringify(expected))
    const result = readTtFile({
      path: testDir,
      file: 'history.json',
    })
    expect(result).toEqual(expected)
  })

  test('it works with path and reads state', () => {
    const expected = { state: true }
    writeFileSync(`${testDir}/state.json`, JSON.stringify(expected))
    const result = readTtFile({
      path: testDir,
      file: 'state.json',
    })
    expect(result).toEqual(expected)
  })

  test('it works with path and defaults to state', () => {
    const expected = { state: true }
    writeFileSync(`${testDir}/state.json`, JSON.stringify(expected))
    const result = readTtFile({
      path: testDir,
    })
    expect(result).toEqual(expected)
  })

  test("it returns {} when can't read", () => {
    const expected = {}
    const result = readTtFile({ path: 'nope/nope' })
    expect(result).toEqual(expected)
  })
})
