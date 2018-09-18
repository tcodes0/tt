export const operationObj = {
  mode: "new",
  input: ["foo"]
};
// refac to add optional input object to add more properties to returned value
export const operation = (mode = throw "invalid mode", input = []) => ({
  mode: mode,
  input: Array.isArray(input) ? input : [input]
});

// returns an operation object
export const parseArguments = argv => {
  // refac to receive reservedWords as input array
  const reservedWords = ["new", "rm", "log", "config", "help", "-h", "--help"];
  const [, , ...userArgs] = argv;
  const [argOne, ...argTwoAndOthers] = userArgs;
  const [argTwo, ...otherArgs] = argTwoAndOthers;
  const isValidName = word => !reservedWords.includes(word);

  if (!userArgs.length) return operation("noArgs");
  if (otherArgs.length) return operation("parseErr", userArgs);

  switch (argOne) {
    case "new":
      if (!argTwo) return operation("new");
      return isValidName(argTwo)
        ? operation("new", argTwo)
        : operation("parseErr", userArgs);

    case "rm":
      if (!argTwo) return operation("rm");
      return isValidName(argTwo)
        ? operation("rm", argTwo)
        : operation("parseErr", userArgs);

    case "log":
      if (!argTwo) return operation("log");
      return isValidName(argTwo)
        ? operation("log", argTwo)
        : operation("parseErr", userArgs);

    case "config":
      return userArgs.length === 1
        ? operation("config")
        : operation("parseErr", userArgs);

    case "-h":
    case "--help":
    case "help":
      return userArgs.length === 1
        ? operation("help")
        : operation("parseErr", userArgs);

    default:
      argTwoAndOthers.forEach(arg => {
        if (reservedWords.includes(arg)) return operation("parseErr", userArgs);
      });

      if (isValidName(argOne) && !argTwo) return operation("new", argOne);

      return operation("parseErr", userArgs);
  }
};
