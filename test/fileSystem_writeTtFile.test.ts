import { writeTtFile, dev_ttDir } from "../src/util"
import { readFileSync } from "fs"
import rm from "rimraf"

describe("writeTtFile test", () => {
  test("reads history", () => {
    const expected = { history: true }
    writeTtFile({ path: dev_ttDir, file: "history.json", data: expected })
    const result = readFileSync(`${dev_ttDir}/history.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("reads state", () => {
    const expected = { state: true }
    writeTtFile({ path: dev_ttDir, file: "state.json", data: expected })
    const result = readFileSync(`${dev_ttDir}/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("defauts file to state", () => {
    const expected = { state: true }
    writeTtFile({ path: dev_ttDir, data: expected })
    const result = readFileSync(`${dev_ttDir}/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("defauts data to {}", () => {
    const expected = {}
    writeTtFile({ path: dev_ttDir })
    const result = readFileSync(`${dev_ttDir}/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("it attempts mkdir when can't write", () => {
    const expected = {}
    writeTtFile({ path: `${dev_ttDir}/somefolder` })
    const result = readFileSync(`${dev_ttDir}/somefolder/state.json`, "utf-8")
    const parsed = JSON.parse(result)
    rm(`${dev_ttDir}/somefolder`, () => {})
    expect(parsed).toEqual(expected)
  })
})
