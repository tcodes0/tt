/* eslint-disable no-console */
import fs from "fs"
import {
  writeState,
  readState,
  readHistory,
  writeHistory,
  loadStateSync,
  noop,
  promises,
  init,
  ttDir,
  fixture_ttDir,
  stateFile,
  historyFile,
} from "."

const mock = jest.fn(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("mock data")
      }, 200)
    }),
)

const mockReadSync = jest.fn(() => `{ "a": 1 }`)

// const mockFail = jest.fn(
//   () =>
//     new Promise((undefined, reject) => {
//       setTimeout(() => {
//         reject("mockFail data");
//       }, 200);
//     })
// );

describe("init", () => {
  test("calls mkdir if needed", async () => {
    await init(
      `${fixture_ttDir}/test`,
      undefined,
      undefined,
      jest.fn(() => Promise.resolve()),
    )
    const mkdirResult = await promises.stat(`${fixture_ttDir}/test`)

    expect(mkdirResult).toBeInstanceOf(fs.Stats)
    // cleanup
    await promises.rmdir(`${fixture_ttDir}/test`)
  })

  test("creates files", async () => {
    const mockMkdir = jest.fn()
    await init(fixture_ttDir, undefined, mockMkdir, mock)

    expect(mockMkdir).not.toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/state.json`,
      expect.any(String),
    )
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/state.json`,
      expect.any(String),
    )
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/history.json`,
      expect.any(String),
    )
  })
})

describe("state write", () => {
  test("default path", async () => {
    await writeState(undefined, undefined, mock)
    expect(mock).toHaveBeenCalledWith(`${ttDir}/${stateFile}`, "\n")
  })

  test("other path", async () => {
    const otherPath = "foo/bar"
    await writeState(undefined, otherPath, mock)
    expect(mock).toHaveBeenCalledWith(`${otherPath}/${stateFile}`, "\n")
  })

  test("value", async () => {
    await writeState("foo", undefined, mock)
    expect(mock).toHaveBeenCalledWith(`${ttDir}/${stateFile}`, "foo")
  })
})

describe("state read", () => {
  test("default", async () => {
    await readState(fixture_ttDir, undefined, mock)
    expect(mock).toHaveBeenCalledWith(
      fixture_ttDir + "/" + stateFile,
      expect.any(String),
    )
  })

  test("invalid path", async () => {
    console.log = noop
    let result = await readState("invalid/path/123", undefined, mock)
    expect(result).toEqual({})
  })
})

describe("history read", () => {
  test("default", async () => {
    await readHistory(fixture_ttDir, undefined, mock)
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/${historyFile}`,
      expect.any(String),
    )
  })

  test("invalid path", async () => {
    console.log = noop
    let result = await readHistory("invalid/path/123", undefined, mock)
    expect(result).toEqual({})
  })
})

describe("history write", () => {
  test("default path", async () => {
    await writeHistory(undefined, undefined, mock)
    expect(mock).toHaveBeenCalledWith(`${ttDir}/${historyFile}`, "\n")
  })

  test("other path", async () => {
    const otherPath = "foo/bar"
    await writeHistory(undefined, otherPath, mock)
    expect(mock).toHaveBeenCalledWith(`${otherPath}/${historyFile}`, "\n")
  })

  test("value", async () => {
    await writeHistory("foo", undefined, mock)
    expect(mock).toHaveBeenCalledWith(`${ttDir}/${historyFile}`, "foo")
  })
})

describe("state load", () => {
  console.log = noop
  console.error = noop

  test("returns object", () => {
    const result = loadStateSync()
    expect(result).toEqual(expect.any(Object))
  })

  test("default path", () => {
    loadStateSync(undefined, undefined, mockReadSync)
    expect(mockReadSync).toHaveBeenCalledWith(`${ttDir}/${stateFile}`, "utf-8")
  })

  test("other path", () => {
    const otherPath = "foo/bar"
    loadStateSync(otherPath, undefined, mockReadSync)
    expect(mockReadSync).toHaveBeenCalledWith(
      `${otherPath}/${stateFile}`,
      "utf-8",
    )
  })

  test("throws on invalid path", () => {
    const invalidPath = "foo/bar"
    expect(() => loadStateSync(invalidPath)).toThrow("ENOENT")
  })
})
