import fs from "fs";
import noop from "./noop";

// silence warning
const real = process.emitWarning;
process.emitWarning = noop;
const fsPromises = fs.promises;
process.emitWarning = real;

export default fsPromises;
