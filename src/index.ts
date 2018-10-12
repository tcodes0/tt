/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import cli from "./cli";

const envs = ["production", "development"]

export const env = envs[1];

process.on("unhandledRejection", reason => {
  console.log(reason);
});

cli();
