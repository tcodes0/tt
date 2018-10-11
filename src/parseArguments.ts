import { operation } from "./actions";

/**
 * Parses argv-like input. Returns an operation object.
 * @param {string[]} argv Node's process.argv
 */
export default function parseArguments(argv: string[]) {
  // refac to receive reservedWords as input array
  const reservedWords = ["new", "rm", "log", "config", "help", "-h", "--help"];
  // argv[0] is node, argv[1] is program path
  const [, , ...userArgs] = argv;
  const [argOne, ...argTwoAndOthers] = userArgs;
  const [argTwo, ...otherArgs] = argTwoAndOthers;
  const isValidName = (word: string) => !reservedWords.includes(word);

  if (!userArgs.length) return operation("noArgs");
  if (otherArgs.length)
    return operation("parseErr", userArgs, { message: "Too many arguments" });

  switch (argOne) {
    case "new":
      if (!argTwo) return operation("new");
      return isValidName(argTwo)
        ? operation("new", argTwo)
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕"
          });

    case "rm":
      if (!argTwo) return operation("rm");
      return isValidName(argTwo)
        ? operation("rm", argTwo)
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕"
          });

    case "log":
      if (!argTwo) return operation("log");
      return isValidName(argTwo)
        ? operation("log", argTwo)
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕"
          });

    case "config":
      return userArgs.length === 1
        ? operation("config")
        : operation("parseErr", argTwo, {
            message: "Argument is identical to a command 😕"
          });

    case "-h":
    case "--help":
    case "help":
      return userArgs.length === 1
        ? operation("help")
        : operation("parseErr", userArgs, {
            message: "Try `tt help` without other arguments"
          });

    default:
      argTwoAndOthers.forEach(arg => {
        if (!isValidName(arg))
          return operation("parseErr", arg, {
            message: "Command names cannot be used as arguments"
          });
        return
      });

      if (isValidName(argOne) && !argTwo) return operation("new", argOne);

      return operation("parseErr", userArgs, {
        message: "Invalid options 🤔. Try `tt help`"
      });
  }
}
