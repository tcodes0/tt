/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import updaters from "../src/updaters";
import writeState from "../src/_services/fileSystem_writeState";
import readState from "../src/_services/fileSystem_readState";
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

test("initTTFiles", async () => {
  await updaters.initTTFiles(
    mock,
    "tt folder doesn't exist",
    jest.fn(() => ({ catch: () => {} }))
  );
  expect(mock).toHaveBeenCalledWith("tt folder doesn't exist");

  // future add a test to when mkdir gets invalid input and does something other than throw.

  const mockMkdir = jest.fn();

  // tt folder exists (mocked as desktop)
  await updaters.initTTFiles(mockMkdir, `${home}/Desktop`, mock);
  expect(mockMkdir).not.toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith(
    `${home}/Desktop/state.json`,
    expect.any(String)
  );
  expect(mock).toHaveBeenCalledWith(
    `${home}/Desktop/state.json`,
    expect.any(String)
  );
  expect(mock).toHaveBeenCalledWith(
    `${home}/Desktop/history.json`,
    expect.any(String)
  );
});

test("writeState default path", async () => {
  await writeState(undefined, undefined, mock);
  expect(mock).toHaveBeenCalledWith(ttDir + "/" + stateFile, "\n");
});

test("writeState other path", async () => {
  const otherPath = "foo/bar";
  await writeState(undefined, otherPath, mock);
  expect(mock).toHaveBeenCalledWith(otherPath + "/" + stateFile, "\n");
});

test("writeState value", async () => {
  await writeState("foo", undefined, mock);
  expect(mock).toHaveBeenCalledWith(ttDir + "/" + stateFile, "foo");
});

test("readState default", async () => {
  await readState(fixture_ttDir, undefined, mock);
  expect(mock).toHaveBeenCalledWith(
    fixture_ttDir + "/" + stateFile,
    expect.any(String)
  );
});

test("readState invalid path", async () => {
  console.log = noop;
  let result = await readState("invalid/path/123", undefined, mock);
  expect(result).toEqual({});
});
