/* eslint-disable no-unused-vars */
import { parseArguments, operation } from "../cli";

test("foo", () => {
  expect(4).toBe(4);
});

// process.argv0 is node, or whatever interpreter is running
// process.argv[0] is the actual node path on the machine
// process.argv[1] is the actual program path on the machine
// process.argv[2] is first arg
const mockArgv = (...args) => [
  "/usr/local/Cellar/node/10.10.0/bin/node",
  "/usr/local/bin/tt",
  ...args
];

test("operation", () => {
  let result;

  result = operation("mode new task", "studying");
  expect(result).toMatchObject({ mode: expect.any(String) });

  {
    let { mode, ...nonMode } = result;

    Object.values(nonMode).forEach(value => {
      expect(value).toEqual(expect.any(Array));
    });
  }

  result = operation("mode rm task", ["studying", "gaming"]);

  {
    let { mode, ...nonMode2 } = result;

    Object.values(nonMode2).forEach(value => {
      expect(value).toEqual(expect.any(Array));
    });
  }

  // arg1 is necessary
  expect(() => operation()).toThrow();
});

test("parseArguments basic", () => {
  let result;

  result = parseArguments(mockArgv());
  expect(result).toMatchObject({ mode: "noArgs", input: [] });

  result = parseArguments(mockArgv("github work"));
  expect(result).toMatchObject({ mode: "new", input: ["github work"] });

  result = parseArguments(mockArgv("new", "github work"));
  expect(result).toMatchObject({ mode: "new", input: ["github work"] });

  result = parseArguments(mockArgv("rm"));
  expect(result).toMatchObject({ mode: "rm", input: [] });

  result = parseArguments(mockArgv("log"));
  expect(result).toMatchObject({ mode: "log", input: [] });

  result = parseArguments(mockArgv("log", "week"));
  expect(result).toMatchObject({ mode: "log", input: ["week"] });

  result = parseArguments(mockArgv("config"));
  expect(result).toMatchObject({ mode: "config", input: [] });

  result = parseArguments(mockArgv("-h"));
  expect(result).toMatchObject({ mode: "help", input: [] });

  result = parseArguments(mockArgv("--help"));
  expect(result).toMatchObject({ mode: "help", input: [] });

  result = parseArguments(mockArgv("github", "work"));
  expect(result).toMatchObject({ mode: "parseErr", input: ["github", "work"] });

  result = parseArguments(mockArgv("newtask"));
  expect(result).toMatchObject({ mode: "new", input: ["newtask"] });
});

test("parseArguments edge cases", () => {
  let result;

  result = parseArguments(mockArgv("new", "rm"));
  expect(result).toMatchObject({ mode: "parseErr", input: ["new", "rm"] });

  result = parseArguments(mockArgv("-h", "foobar"));
  expect(result).toMatchObject({ mode: "parseErr", input: ["-h", "foobar"] });

  // specify which opts log and other take
  // result = parseArguments(mockArgv("log", "newaf"));
  // expect(result).toMatchObject({ mode: "parseErr", input: ["log", "log"] });
});
