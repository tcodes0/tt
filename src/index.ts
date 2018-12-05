/* eslint-disable no-console */
import { cli } from "./app"

process.on("unhandledRejection", reason => {
  console.log("unhandled rejection ---->", reason)
})

cli()
