/* eslint-disable no-unused-vars */
import parseArguments from "./parseArguments";
import {
  createStore,
  combineReducers,
  bindActionCreators,
  compose
} from "redux";
import { initState, initTask } from "./actions";
import { bailout } from "./utils";
import { pushHistory, readState, persistState } from "./updaters";

const stderr = process.stderr;
const stdout = process.stdout;

/*
parseArguments, get an operations object

- new
check if disk state.tracking is true
  if it is, stop that task and push to history

create a new task
set state to tracking

write the state
push the task


check if disk state.tracking is true
  if it is, load state from disk
  else create a new store

*/

const opNew = async input => {
  const state = await readState();
  if (state.tracking) {
    console.log("stop task and push to history");
  }
  const newTask = initTask(input);
  state.tracking = true;
  persistState(undefined, undefined, state);
  pushHistory(newTask);
};

export default async function cli(mockArgs) {
  const operation = parseArguments(mockArgs || process.argv);

  switch (operation.mode) {
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `);
      break;
    case "new":
      await opNew(operation.input);
      break;
    // default:
    //   break;
  }
}
