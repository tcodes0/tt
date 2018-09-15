const historyPush = () => {
  return "I push to history";
};

const historyRead = () => {
  return "I read the history";
};

const historyPrint = () => {
  return "I Print the history to cli";
};

const persistState = () => {
  return "I write the state object to JSON";
};

const readState = () => {
  return "I read the state object from a JSON file";
};

export default {
  historyPush,
  historyRead,
  historyPrint,
  persistState,
  readState
};
