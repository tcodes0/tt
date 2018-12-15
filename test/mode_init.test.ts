import { execSync } from 'child_process'
import { cli } from '../src/app'
import { readFileSync, statSync, writeFileSync } from 'fs'
import { cliArgs, dev_ttDir, ttFiles } from '../src/util'
import rm from 'rimraf'

const testDir = `${dev_ttDir}-mode_init.test`

afterAll(() => {
  execSync(`mkdir -p ${testDir}`)
  const testJSON = { autoGenerated: 0 }

  ttFiles.forEach(file => {
    writeFileSync(`${testDir}/${file}`, JSON.stringify(testJSON))
  })
})

describe('tt init', () => {
  test("makes path if doesn't exist", () => {
    rm.sync(testDir)
    cli(cliArgs('init'), { ttRoot: testDir })
    expect(() => statSync(testDir)).not.toThrow(/ENOENT/)
  })

  test('erases files', () => {
    const notExpected = JSON.stringify({ nope: 4 })

    ttFiles.forEach(file => {
      writeFileSync(`${testDir}/${file}`, notExpected)
    })

    cli(cliArgs('init'), { ttRoot: testDir })

    ttFiles.forEach(file => {
      const result = readFileSync(`${testDir}/${file}`, 'utf-8')
      expect(result).not.toMatch(new RegExp(notExpected))
    })
  })
})
