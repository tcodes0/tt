import fs from "fs";
import fsPromisesProxy from "../src/utils/fsPromisesProxy";

const promises = fsPromisesProxy;

// fs.promises API added on Node v10
const funcNames = [
  "access",
  "appendFile",
  "chmod",
  "chown",
  "copyFile",
  "lchmod",
  "lchown",
  "link",
  "lstat",
  "mkdir",
  "mkdtemp",
  "open",
  "readFile",
  "readdir",
  "readlink",
  "realpath",
  "rename",
  "rmdir",
  "stat",
  "symlink",
  "truncate",
  "unlink",
  "utimes",
  "writeFile"
];

test("fs promises proxy returns Functions", () => {
  funcNames.map(func => {
    expect(promises[func]).toEqual(expect.any(Function));
  });
});

test("fs promises proxy returns async Functions", () => {
  funcNames.map(func => {
    const str = promises[func].toString();
    expect(str).toMatch(/^async function/);
    expect(str).not.toMatch(/^function/);
  });
});

test("fs promises proxy *Sync fn returns from fs", () => {
  expect(promises["readFileSync"]).toBe(fs["readFileSync"]);
});

test("fs promises proxy non Functions return from fs", () => {
  expect(promises["F_OK"]).toBe(fs["F_OK"]);
  expect(promises["constants"]).toBe(fs["constants"]);
});
