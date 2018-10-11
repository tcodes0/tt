/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import cli from "./cli";

process.on("unhandledRejection", reason => {
  console.log(reason);
});

cli();
