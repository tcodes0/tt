import { readHistory, fixture_ttDir } from "../src/util"
import { writeFileSync } from "fs"

describe("readHistory test", () => {
  test("it works with path", async () => {
    const expected = { history: true }
    writeFileSync(`${fixture_ttDir}/history.json`, JSON.stringify(expected))
    const result = await readHistory({ path: fixture_ttDir, log: false })
    expect(result).toEqual(expected)
  })

  test("it returns {} when error", async () => {
    const expected = {}
    const result = await readHistory({ path: "nope/nope" })
    expect(result).toEqual(expected)
  })
})
