import { Glob } from "bun";

import build from "../loaders";

const glob = new Glob("**/*");

for await (const file of glob.scan("./pages/")) {
  console.log(build("./pages/"+file));
}
