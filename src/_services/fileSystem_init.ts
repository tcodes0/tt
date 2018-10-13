import promises from "../_utils/fsPromisesProxy";
import { ttDir } from "../_utils/constants";

export default async function initTTFiles(
  mkdir = promises.mkdir,
  path = ttDir,
  writeFile = promises.writeFile,
  files = ["ttrc.json", "history.json", "state.json"]
) {
  await promises.stat(path).catch(async err => {
    if (err.code === "ENOENT") {
      await mkdir(path).catch(err => {
        throw err;
      });
    } else {
      throw err;
    }
  });

  return Promise.all(
    files.map(file => writeFile(`${path}/${file}`, "{}\n"))
  ).catch(err => {
    throw err;
  });
}
