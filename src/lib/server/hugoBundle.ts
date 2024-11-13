const rawPages = import.meta.glob("~/content/**/*.md")

type HugoBundleFiles = Array<{
  file: string,
  route: string,
}>

export let leaf: HugoBundleFiles = []
export let branch: HugoBundleFiles = []

let spl
let importPath

for(let page in rawPages) {
  spl = page.split("/")
  importPath = "~raw" + page

  switch(spl[spl.length - 1]) {
    case "_index.md":
      branch.push({
        file: importPath,
        route: page.split("/").slice(3, -1).join("/")
      })
      break
    case "index.md":
      leaf.push({
        file: importPath,
        route: page.split("/").slice(3, -1).join("/")
      })
      break
    default:
      leaf.push({
        file: importPath,
        route: page.replace(/^\/src\/content\//, "").replace(/\.md$/, ""),
      })
      break
  }
}

console.log("leaf:", leaf)
console.log("branch:", branch)
