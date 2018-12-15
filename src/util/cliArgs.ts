// process.argv0 is node, or whatever interpreter is running
// process.argv[0] is the actual node path on the machine
// process.argv[1] is the actual program path on the machine
// process.argv[2] is first arg
export default function cliArgs(...args: string[]) {
  return [
    '/usr/local/Cellar/node/10.10.0/bin/node',
    '/usr/local/bin/tt',
    ...args,
  ]
}
