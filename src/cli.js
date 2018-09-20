/* eslint-disable no-unused-vars */
import parseArguments from "./parseArguments";
import {
  createStore,
  combineReducers,
  bindActionCreators,
  compose
} from "redux";
import { initState } from "./actions";
import { bailout } from "./utils";

/*
parseArguments, get an operations object

check if disk state.tracking is true
  if it is, load state from disk
  else create a new store

*/

export default function cli(mockArgs) {
  const operation = parseArguments(mockArgs || process.argv);
  const stderr = process.stderr;
  const stdout = process.stdout;

  switch (operation.mode) {
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `);
    // default:
    //   break;
  }
}
