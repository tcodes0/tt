import { env, Operation } from "../util"

export function operation(
  mode: string,
  input: any[] | any = [],
  extra: { message?: string } = {},
) {
  const operationObject = {
    mode,
    input: Array.isArray(input) ? input : [input],
    ...extra,
  }
  return operationObject
}

/**
 * @param argv string[], like Node's process.argv.
 * @returns An operation object
 */
export default function parseArguments(argv: string[]): Operation {
  const reservedWords = ["new", "rm", "log", "config", "help", "-h", "--help"]
  // argv[0] is node, argv[1] is program path
  const [, , ...userArgs] = argv
  const [argOne, ...argTwoAndOthers] = userArgs
  const [argTwo, ...otherArgs] = argTwoAndOthers
  const isValidName = (word: string) => !reservedWords.includes(word)

  if (env === "development" && argOne == "dev") {
    return operation.apply(null, argTwoAndOthers)
  }

  if (!userArgs.length) {
    return operation("noArgs")
  }
  if (otherArgs.length) {
    return operation("parseErr", userArgs, { message: "Too many arguments" })
  }

  switch (argOne) {
    case "new":
      if (!argTwo) {
        return operation("new")
      }
      return isValidName(argTwo)
        ? operation("new", argTwo)
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕",
          })

    case "rm":
      if (!argTwo) {
        return operation("rm")
      }
      return isValidName(argTwo)
        ? operation("rm", argTwo)
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕",
          })

    case "log":
      if (!argTwo) {
        return operation("log")
      }
      return isValidName(argTwo)
        ? operation("log", argTwo)
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕",
          })

    case "config":
      return userArgs.length === 1
        ? operation("config")
        : operation("parseErr", argTwo, {
            message: "`tt config` doesn't take arguments. 🤔",
          })

    case "init":
      return userArgs.length === 1
        ? operation("init")
        : operation("parseErr", argTwo, {
            message: "`tt init` doesn't take arguments. 🤔",
          })

    case "-h":
    case "--help":
    case "help":
      return userArgs.length === 1
        ? operation("help")
        : operation("parseErr", userArgs, {
            message: "Try `tt help` without other arguments",
          })

    default:
      argTwoAndOthers.forEach((arg) => {
        if (!isValidName(arg)) {
          return operation("parseErr", arg, {
            message: "Command names cannot be used as arguments",
          })
        }
        return
      })

      if (isValidName(argOne) && !argTwo) {
        return operation("new", argOne)
      }

      return operation("parseErr", userArgs, {
        message: "Invalid options 🤔. Try `tt help`",
      })
  }
}
