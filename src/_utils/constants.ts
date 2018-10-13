import os from "os";

export const home = os.homedir();
export const ttDir = `${os.homedir()}/.tt`;
export const fixture_ttDir = `test/.tt`;
export const stateFile = `state.json`;
export const historyFile = `history.json`;
