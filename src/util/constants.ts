import os from "os"

export const home = os.homedir()
export const ttDir = `${os.homedir()}/.tt`
export const devDir = `/Users/vamac/Code/tt`
export const fixture_ttDir = `${devDir}/test/.tt`
export const stateFile = `state.json`
export const historyFile = `history.json`
