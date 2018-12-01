import { writeTtFile, fixture_ttDir } from "../src/util"
import { readFileSync } from "fs"
import rm from "rimraf"

describe("writeTtFile test", () => {
  test("reads history", async () => {
    const expected = { history: true }
    writeTtFile({ path: fixture_ttDir, file: "history.json", data: expected })
    const result = readFileSync(`${fixture_ttDir}/history.json`, "utf-8")
    const parsed = await JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("reads state", async () => {
    const expected = { state: true }
    writeTtFile({ path: fixture_ttDir, file: "state.json", data: expected })
    const result = readFileSync(`${fixture_ttDir}/state.json`, "utf-8")
    const parsed = await JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("defauts file to state", async () => {
    const expected = { state: true }
    writeTtFile({ path: fixture_ttDir, data: expected })
    const result = readFileSync(`${fixture_ttDir}/state.json`, "utf-8")
    const parsed = await JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("defauts data to {}", async () => {
    const expected = {}
    writeTtFile({ path: fixture_ttDir })
    const result = readFileSync(`${fixture_ttDir}/state.json`, "utf-8")
    const parsed = await JSON.parse(result)
    expect(parsed).toEqual(expected)
  })

  test("it attempts mkdir when can't write", async () => {
    const expected = {}
    writeTtFile({ path: `${fixture_ttDir}/somefolder` })
    const result = readFileSync(
      `${fixture_ttDir}/somefolder/state.json`,
      "utf-8",
    )
    const parsed = await JSON.parse(result)
    expect(parsed).toEqual(expected)
    rm(`${fixture_ttDir}/somefolder`, () => {})
  })
})
