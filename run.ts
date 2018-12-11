import { cli } from "./src/app"
import { cliArgs, dev_ttDir } from "./src/util"

// cli(cliArgs("init"), { ttRoot: dev_ttDir })
cli(cliArgs("init"), { ttRoot: `${dev_ttDir}-cli.test`, log: true })
