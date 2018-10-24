import promises from "../_utils/fsPromisesProxy";
import { ttDir } from "../_utils/constants";

let attempts = 0;

export default async function initTTFiles(
  path = ttDir,
  files = ["ttrc.json", "history.json", "state.json"],
  mkdir = promises.mkdir,
  writeFile = promises.writeFile
) {
  try {
    await promises.stat(path);
    return Promise.all(files.map(file => writeFile(`${path}/${file}`, "{}\n")));
  } catch (err) {
    if (err.code === "ENOENT" && attempts <= 3) {
      attempts += 1;
      console.log("init error", err);
      await mkdir(path)
        .then(() => {
          return initTTFiles(path, files, mkdir, writeFile);
        })
        .catch(err => {
          throw err;
        });
    } else {
      throw err;
    }

    return;
  }
}
