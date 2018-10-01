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

/**
 * write arg to ~/.tt/state.json
 */
export const stateWrite = (path, data) => ({
  type: "STATE_WRITE",
  path,
  data
});

/**
 * look for ~/.tt/state.json.
 * If found, read it and return result.
 * Else return {}
 */
export const stateRead = path => ({
  type: "STATE_READ",
  path
});

/**
 * initTTFiles() - create default files with defaults
 *  if not tt folder, create it
 *  if not tt files, create them
 *  else globber them with default values
 */
export const initTTFiles = (path, files) => ({
  type: "INIT_TT_FILES",
  path,
  files
});

export default {
  historyWrite,
  historyRead,
  historyPrint,
  stateWrite,
  stateRead,
  initTTFiles
};
