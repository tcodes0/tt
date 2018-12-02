import os from "os"

export const home = os.homedir()
export const ttDir = `${os.homedir()}/.tt`
export const devDir = `${os.homedir()}/Code/tt`
export const dev_ttDir = `${devDir}/test/.tt`
export const stateFile = `state.json`
export const historyFile = `history.json`
export const rcFile = `ttrc.json`
export const ttFiles = [stateFile, historyFile, rcFile]
