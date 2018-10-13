/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import writeState from "../src/_services/fileSystem_writeState";
import readState from "../src/_services/fileSystem_readState";
import init from "../src/_services/fileSystem_init";
import { home, ttDir, fixture_ttDir, stateFile } from "../src/_utils/constants";
import noop from "../src/_utils/noop";

const mock = jest.fn(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve("mock data");
      }, 200);
    })
);

const mockFail = jest.fn(
  () =>
    new Promise((undefined, reject) => {
      setTimeout(() => {
        reject("mockFail data");
      }, 200);
    })
);

describe("init", () => {
  test("calls mkdir if needed", async () => {
    await init(mock, "/invalid/path", jest.fn(() => Promise.resolve()));
    expect(mock).toHaveBeenCalledWith("/invalid/path");
  });

  test("creates files", async () => {
    const mockMkdir = jest.fn();

    await init(mockMkdir, fixture_ttDir, mock);
    expect(mockMkdir).not.toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/state.json`,
      expect.any(String)
    );
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/state.json`,
      expect.any(String)
    );
    expect(mock).toHaveBeenCalledWith(
      `${fixture_ttDir}/history.json`,
      expect.any(String)
    );
  });
});

describe("state write", () => {
  test("default path", async () => {
    await writeState(undefined, undefined, mock);
    expect(mock).toHaveBeenCalledWith(ttDir + "/" + stateFile, "\n");
  });

  test("other path", async () => {
    const otherPath = "foo/bar";
    await writeState(undefined, otherPath, mock);
    expect(mock).toHaveBeenCalledWith(otherPath + "/" + stateFile, "\n");
  });

  test("value", async () => {
    await writeState("foo", undefined, mock);
    expect(mock).toHaveBeenCalledWith(ttDir + "/" + stateFile, "foo");
  });
});

describe("state read", () => {
  test("default", async () => {
    await readState(fixture_ttDir, undefined, mock);
    expect(mock).toHaveBeenCalledWith(
      fixture_ttDir + "/" + stateFile,
      expect.any(String)
    );
  });

  test("invalid path", async () => {
    console.log = noop;
    let result = await readState("invalid/path/123", undefined, mock);
    expect(result).toEqual({});
  });
});
