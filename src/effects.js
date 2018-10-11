export const historyWrite = task => ({
  type: "HISTORY_WRITE",
  task
});

export const historyRead = () => ({
  type: "HISTORY_READ"
});

export const historyPrint = () => ({
  type: "HISTORY_PRINT"
});

export const stateWrite = (path, data) => ({
  type: "STATE_WRITE",
  path,
  data
});

export const stateRead = path => ({
  type: "STATE_READ",
  path
});

export const initTTFiles = (path, files) => ({
  type: "INIT_TT_FILES",
  path,
  files
});

const configRead = path => ({
  type: "CONFIG_READ",
  path
});

const configWrite = path => ({
  type: "CONFIG_WRITE",
  path
});

const configPrint = () => ({
  type: "CONFIG_PRINT"
});

export default {
  // history
  historyWrite,
  historyRead,
  historyPrint,
  // state
  stateWrite,
  stateRead,
  // config
  configRead,
  configWrite,
  configPrint,
  // others
  initTTFiles
};
