import { readTtFile, dev_ttDir } from "../src/util"
import { writeFileSync } from "fs"

describe("readTtFile test", () => {
  test("it works with path and reads history", () => {
    const expected = { history: true }
    writeFileSync(`${dev_ttDir}/history.json`, JSON.stringify(expected))
    const result = readTtFile({
      path: dev_ttDir,
      file: "history.json",
    })
    expect(result).toEqual(expected)
  })

  test("it works with path and reads state", () => {
    const expected = { state: true }
    writeFileSync(`${dev_ttDir}/state.json`, JSON.stringify(expected))
    const result = readTtFile({
      path: dev_ttDir,
      file: "state.json",
    })
    expect(result).toEqual(expected)
  })

  test("it works with path and defaults to state", () => {
    const expected = { state: true }
    writeFileSync(`${dev_ttDir}/state.json`, JSON.stringify(expected))
    const result = readTtFile({
      path: dev_ttDir,
    })
    expect(result).toEqual(expected)
  })

  test("it returns {} when can't read", () => {
    const expected = {}
    const result = readTtFile({ path: "nope/nope" })
    expect(result).toEqual(expected)
  })
})
