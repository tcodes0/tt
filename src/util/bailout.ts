/* eslint-disable no-process-exit */

export default function bailout(message = "Generic error. Sorry :(") {
  process.stderr.write(`tt error 💀 \n${message}\n`)
  process.exit(1)
}
