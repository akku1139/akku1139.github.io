import path from "node:path";

import md from "./markdown";

const build = async (filename) => {
  console.log(filename);

  const fp = Bun.file(filename);
  const content = await fp.text();
  const ext = /^\.?(.*)$/.exec(path.extname(filename));

  switch(ext) {
    case "md":
      return md(content);
  }
};

export default build;
