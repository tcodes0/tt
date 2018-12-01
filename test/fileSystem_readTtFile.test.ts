import { readTtFile, fixture_ttDir } from "../src/util"
import { writeFileSync } from "fs"

describe("readTtFile test", () => {
  test("it works with path and reads history", async () => {
    const expected = { history: true }
    writeFileSync(`${fixture_ttDir}/history.json`, JSON.stringify(expected))
    const result = await readTtFile({
      path: fixture_ttDir,
      file: "history.json",
    })
    expect(result).toEqual(expected)
  })

  test("it works with path and reads state", async () => {
    const expected = { state: true }
    writeFileSync(`${fixture_ttDir}/state.json`, JSON.stringify(expected))
    const result = await readTtFile({
      path: fixture_ttDir,
      file: "state.json",
    })
    expect(result).toEqual(expected)
  })

  test("it works with path and defaults to state", async () => {
    const expected = { state: true }
    writeFileSync(`${fixture_ttDir}/state.json`, JSON.stringify(expected))
    const result = await readTtFile({
      path: fixture_ttDir,
    })
    expect(result).toEqual(expected)
  })

  test("it returns {} when can't read", async () => {
    const expected = {}
    const result = await readTtFile({ path: "nope/nope" })
    expect(result).toEqual(expected)
  })
})
