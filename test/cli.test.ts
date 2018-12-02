import cli from "../src"
import { readFileSync } from "fs"
import {
  ttDir,
  cliArgs as args,
  stateFile,
  historyFile,
  rcFile,
  dev_ttDir,
  noop,
  production,
} from "../src/util"
import rm from "rimraf"

describe("cli test", () => {
  test("tt init creates state file with {}", () => {
    // rm(dev_ttDir, () => {})
    cli(args("init"), { root: dev_ttDir })
    const result = readFileSync(`${dev_ttDir}/${stateFile}`)
    const expected = {}
    expect(result).toEqual(expected)
  })
})

test("2 is 2", () => {
  expect(2).toBe(2)
})
