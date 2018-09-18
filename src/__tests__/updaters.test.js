import updaters from "../updaters";
import { home, ttDir } from "../utils";

const mock = jest.fn(
  async () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve("mock data");
      }, 200);
    })
);

test("initTTFiles", async () => {
  await updaters.initTTFiles(
    mock,
    "tt folder doesn't exist",
    jest.fn(() => ({ catch: () => {} }))
  );
  expect(mock).toHaveBeenCalledWith(
    "tt folder doesn't exist",
    expect.any(Function)
  );

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

test("persistState", async () => {
  const { persistState } = updaters;

  await persistState(mock);
  expect(mock).toHaveBeenCalledWith(`${ttDir}/state.json`, "\n");
});

test("readState", async () => {
  const { readState } = updaters;

  await readState(mock);
  expect(mock).toHaveBeenCalledWith(`${ttDir}/state.json`, expect.any(String));

  let result = await readState(mock, "invalid path or non existent");
  expect(result).toEqual({});
});
