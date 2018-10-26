/* eslint-disable no-console */
import app from "./app"

process.on("unhandledRejection", (reason) => {
  console.log("unhandled rejection ---->", reason)
})

app()
