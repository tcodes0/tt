/* eslint-disable no-unused-vars */
//@ts-ignore
import parseArguments from "./parseArguments";
//@ts-ignore
import bailout from "./utils/bailout";
//@ts-ignore
import { dispatch, getState } from "./store";
// import toggleTracking from "./actions/tracking/toggle";
import stateWrite from "./effects/state/write";

// const stderr = process.stderr;
// const stdout = process.stdout;

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

// const performNew = async input => {
//   dispatch(stateRead());
//   if (getState().tracking) {
//     console.log("stop task and push to history");
//     dispatch(stopTracking("task?"));
//   }
//   const newTask = initTask(input);
//   state.tracking = true;
//   persistState(undefined, undefined, state);
//   pushHistory(newTask);
// };

/**
 * Main tt function. Maps operations to actions.
 * Will read process.argv or use a string[] provided as argument.
 * @param Args or undefined to parse process.argv
 */
export default function cli(argsOrMock: string[] = process.argv) {
  const operation = parseArguments(argsOrMock);

  switch (operation.mode) {
    case "dev":
      // console.log("Hi dev\n")
      // dispatch(toggleTracking());
      dispatch(stateWrite({ data: "foobar" }));
      break;
    case "parseErr":
      bailout(`
      ${operation.message}
      Failed with: ${operation.input}
      `);
      break;
    case "noArgs":
      // bailout(`
      // Please specify a few args.
      // `);
      break;
    case "new":
      // await performNew(operation.input);
      break;
    // default:
    //   break;
  }
}
