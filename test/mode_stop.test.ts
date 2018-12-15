import { cli } from '../src/app'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import {
  cliArgs,
  dev_ttDir,
  ttFiles,
  stateFile,
  historyFile,
  defaultTask,
} from '../src/util'

const testDir = `${dev_ttDir}-mode_stop.test`
const testState = `${testDir}/${stateFile}`
const testHistory = `${testDir}/${historyFile}`

beforeAll(() => {
  mkdirSync(testDir, { recursive: true })
  const testJSON = { autoGenerated: 0 }

  ttFiles.forEach(file => {
    writeFileSync(`${testDir}/${file}`, JSON.stringify(testJSON))
  })
})

describe('tt stop', () => {
  test('`tt stop (not tracking so exits with 1)`', () => {
    const mock = jest.fn(() => {})
    // @ts-ignore
    process.exit = mock
    cli(cliArgs('stop'), { ttRoot: testDir })

    expect(mock).toHaveBeenCalledWith(1)
  })

  test('`tt new` `tt stop`', () => {
    cli(cliArgs('new'), { ttRoot: testDir })
    cli(cliArgs('stop'), { ttRoot: testDir })

    let result: string
    result = readFileSync(testHistory, 'utf-8')
    expect(result).toMatch(/name/)
    expect(result).toMatch(new RegExp(defaultTask))
    expect(result).toMatch(/start/)
    expect(result).toMatch(/end/)
    expect(result).toMatch(/sprints/)
    expect(result).toMatch(/history/)
    /**
     *       "{
      \"history\": [
        {
          \"name\": \"Personal Task\",
          \"sprints\": [{ \"start\": 1544872208339, \"end\": 1544872208803 }]
        }
      ]
    }
     */
    result = readFileSync(testState, 'utf-8')
    expect(result).toMatch(/"tracking": false/)
  })
})
