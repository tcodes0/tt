import { writeTtFile, dev_ttDir } from "../src/util"
import { readFileSync } from "fs"
import rm from "rimraf"

const testDir = `${dev_ttDir}-writeTtFile.test`

afterAll(() => {
  rm.sync(`${testDir}/somefolder`)
})

describe("writeTtFile test", () => {
  test("writes history", () => {
    const expected = { history: true }
    writeTtFile({ path: testDir, file: "history.json", data: expected })
    const result = readFileSync(`${testDir}/history.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("writes state", () => {
    const expected = { state: true }
    writeTtFile({ path: testDir, file: "state.json", data: expected })
    const result = readFileSync(`${testDir}/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("defauts file to state", () => {
    const expected = { state: true }
    writeTtFile({ path: testDir, data: expected })
    const result = readFileSync(`${testDir}/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("defauts data to {}", () => {
    const expected = {}
    writeTtFile({ path: testDir })
    const result = readFileSync(`${testDir}/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("it attempts mkdir when can't write", () => {
    const expected = {}
    writeTtFile({ path: `${testDir}/somefolder` })
    const result = readFileSync(`${testDir}/somefolder/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("mkdir: edge case nested dirs", () => {
    rm.sync(testDir)
    const expected = {}
    writeTtFile({ path: `${testDir}/somefolder/lol` })
    const result = readFileSync(`${testDir}/somefolder/lol/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })
})
