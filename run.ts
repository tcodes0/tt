import { cli } from "./src/app"
import { cliArgs, dev_ttDir, ttFiles } from "./src/util"
import { writeFileSync } from "fs"

// @ts-ignore
const testDir = `${dev_ttDir}-mode_stop.test`

ttFiles.forEach(file => {
  writeFileSync(`${testDir}/${file}`, JSON.stringify({}))
})

// cli(cliArgs("init"), { ttRoot: dev_ttDir })
// console.log("----------------------------")
// cli(cliArgs("new", "study"), { ttRoot: dev_ttDir, log: true })
// console.log("----------------------------")
// cli(cliArgs("new", "work"), { ttRoot: dev_ttDir, log: true })
cli(cliArgs("new"), { ttRoot: testDir })
cli(cliArgs("stop"), { ttRoot: testDir })
