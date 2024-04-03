import { Glob } from "bun";
import path from "node:path";

const glob = new Glob("**/*");

for await (const file of glob.scan(".")) {
  console.log(file);
}
