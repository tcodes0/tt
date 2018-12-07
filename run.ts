import { cli } from "./src/app"
import { cliArgs, dev_ttDir } from "./src/util"

// cli(cliArgs("init"), { ttRoot: dev_ttDir })
cli(cliArgs("new"), { ttRoot: dev_ttDir })
