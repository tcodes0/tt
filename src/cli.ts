/* eslint-disable no-unused-vars */
import parseArguments from "./parseArguments";
import {
  createStore,
  combineReducers,
  bindActionCreators,
  compose
} from "redux";
import { initState, initTask, stopTracking, lockState } from "./actions";
import { bailout } from "./utils";
import { pushHistory, readState, persistState } from "./updaters";
import { dispatch, getState } from "./store";
import { stateRead } from "./effects";

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

const performNew = async input => {
  dispatch(stateRead());
  if (getState().tracking) {
    console.log("stop task and push to history");
    dispatch(stopTracking("task?"));
  }
  const newTask = initTask(input);
  state.tracking = true;
  persistState(undefined, undefined, state);
  pushHistory(newTask);
};

/**
 * Main tt function. Maps operations to actions.
 * @param {process.argv-like} mockArgs or undefined to parse process.argv
 */
export default async function cli(mockArgs) {
  const operation = parseArguments(mockArgs || process.argv);

  switch (operation.mode) {
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `);
      break;
    case "noArgs":
      bailout(`
      Please specify a few args.
      `);
      break;
    case "new":
      await performNew(operation.input);
      break;
    // default:
    //   break;
  }
}
