import updaters from "../updaters";
import { home } from "../utils";

test("initTTFiles", async () => {
  const mock = jest.fn(
    async (path, opts = { fail: false }) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          opts.fail ? reject("mock error") : resolve(path);
        }, 200);
      })
  );

  await updaters.initTTFiles(mock, "tt folder doesn't exist");
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
