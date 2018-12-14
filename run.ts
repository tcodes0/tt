import { cli } from "./src/app"
import { cliArgs, dev_ttDir } from "./src/util"

cli(cliArgs("init"), { ttRoot: dev_ttDir })
console.log("----------------------------")
cli(cliArgs("new", "study"), { ttRoot: dev_ttDir, log: true })
console.log("----------------------------")
cli(cliArgs("new", "work"), { ttRoot: dev_ttDir, log: true })
