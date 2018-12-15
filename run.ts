import { cli } from "./src/app"
import { cliArgs, dev_ttDir, ttFiles } from "./src/util"
import { writeFileSync } from "fs"

// @ts-ignore
// const testDir = `${dev_ttDir}-mode_stop.test`
const testDir = `${dev_ttDir}-mode_new.test`

ttFiles.forEach(file => {
  writeFileSync(`${testDir}/${file}`, JSON.stringify({}))
})

cli(cliArgs("init"), { ttRoot: testDir })
cli(cliArgs("new", "study"), { ttRoot: testDir, log: true })
cli(cliArgs("new", "work"), { ttRoot: testDir, log: true })
