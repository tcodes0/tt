/* eslint-disable no-console */
import cli from "./cli";

process.on("unhandledRejection", reason => {
  console.log("unhandled rejection ---->", reason);
});

cli();
