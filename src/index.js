/* eslint-disable no-unused-vars */
import { parseArguments } from "./parseArguments";
import { readState } from "./updaters";
import { promises } from "./utils";
import cli from "./cli";

process.on("unhandledRejection", reason => {
  // eslint-disable-next-line no-console
  console.log(reason);
});

cli();
