export default function parser(args: Array<string>) {
  const [, , ...userArgs] = args
  const [firstArg, ...otherArgs] = userArgs
  if (!firstArg) {
    return {
      mode: 'default',
      args: userArgs,
    }
  }

  switch (firstArg) {
    case 'print':
    case 'p':
      return {
        mode: 'print',
        args: [...userArgs.slice(1)],
      }
    case 'del':
    case 'd':
      return {
        mode: 'delete',
        args: [],
      }
    case 'h':
    case '-h':
    case 'help':
    case '--help':
    case '-help':
      return {
        mode: 'help',
        args: [],
      }
    default:
      return {
        mode: 'default',
        args: userArgs,
      }
  }
}
