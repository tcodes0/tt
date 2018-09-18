/* eslint-disable no-unused-vars */
import { parseArguments } from "./cli";
import { readState } from "./updaters";
import { promises } from "./utils";

process.on("unhandledRejection", reason => {
  // eslint-disable-next-line no-console
  console.log(reason);
});
