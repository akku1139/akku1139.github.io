const rawPages = import.meta.glob("~/content/**/*.md")
console.log(rawPages)

type HugoBundleFiles = Array<{
  file: string,
  route: string,
  mod: () => any
}>

export let leaf: HugoBundleFiles = []
export let branch: HugoBundleFiles = []

let spl

for(let page in rawPages) {
  spl = page.split("/")

  switch(spl[spl.length - 1]) {
    case "_index.md":
      branch.push({
        file: page,
        route: page.split("/").slice(3, -1).join("/"),
        mod: rawPages[page],
      })
      break
    case "index.md":
      leaf.push({
        file: page,
        route: page.split("/").slice(3, -1).join("/"),
        mod: rawPages[page],
      })
      break
    default:
      leaf.push({
        file: page,
        route: page.replace(/^\/src\/content\//, "").replace(/\.md$/, ""),
        mod: rawPages[page],
      })
      break
  }
}

//console.log("leaf:", leaf)
//console.log("branch:", branch)
