/* eslint-disable no-unused-vars */
import { parseArguments, operation } from "../src/app"
import { cliArgs } from "../src/util"

test("operation", () => {
  {
    const result = operation("mode new task", "studying")
    expect(result).toMatchObject({ mode: expect.any(String) })
    const { mode, ...nonMode } = result

    //@ts-ignore
    Object.values(nonMode).forEach((value) => {
      expect(value).toEqual(expect.any(Array))
    })
  }

  {
    const result = operation("mode rm task", ["studying", "gaming"])
    const { mode, ...nonMode } = result

    //@ts-ignore
    Object.values(nonMode).forEach((value) => {
      expect(value).toEqual(expect.any(Array))
    })
  }

  {
    const result = operation("mode foo", ["input bar"], { message: "baz" })
    expect(result.message).toBe("baz")
  }
})

test("parseArguments basic", () => {
  let result

  result = parseArguments(cliArgs())
  expect(result).toMatchObject({ mode: "noArgs", input: [] })

  result = parseArguments(cliArgs("github work"))
  expect(result).toMatchObject({ mode: "new", input: ["github work"] })

  result = parseArguments(cliArgs("new", "github work"))
  expect(result).toMatchObject({ mode: "new", input: ["github work"] })

  result = parseArguments(cliArgs("rm"))
  expect(result).toMatchObject({ mode: "rm", input: [] })

  result = parseArguments(cliArgs("log"))
  expect(result).toMatchObject({ mode: "log", input: [] })

  result = parseArguments(cliArgs("log", "week"))
  expect(result).toMatchObject({ mode: "log", input: ["week"] })

  result = parseArguments(cliArgs("config"))
  expect(result).toMatchObject({ mode: "config", input: [] })

  result = parseArguments(cliArgs("-h"))
  expect(result).toMatchObject({ mode: "help", input: [] })

  result = parseArguments(cliArgs("--help"))
  expect(result).toMatchObject({ mode: "help", input: [] })

  result = parseArguments(cliArgs("github", "work"))
  expect(result).toMatchObject({ mode: "parseErr", input: expect.any(Array) })

  result = parseArguments(cliArgs("newtask"))
  expect(result).toMatchObject({ mode: "new", input: ["newtask"] })
})

test("parseArguments edge cases", () => {
  let result

  result = parseArguments(cliArgs("new", "rm"))
  expect(result).toMatchObject({ mode: "parseErr", input: expect.any(Array) })

  result = parseArguments(cliArgs("-h", "foobar"))
  expect(result).toMatchObject({ mode: "parseErr", input: expect.any(Array) })

  // specify which opts log and other take
  // result = parseArguments(cliArgs("log", "newaf"));
  // expect(result).toMatchObject({ mode: "parseErr", input: ["log", "log"] });
})
