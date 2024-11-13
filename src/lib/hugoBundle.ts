const mdPages = import.meta.glob("~/content/**/*.md")
const assets = import.meta.glob(["~/content/**/*", "!~/content/**/*.md"], {
  query: '?url',
  import: 'default',
})

type HugoBundleFiles = Array<{
  file: string,
  route: string,
  mod: () => any
}>

export let leaf: HugoBundleFiles = []
export let branch: HugoBundleFiles = []

let spl

for(let page in mdPages) {
  spl = page.split("/")

  switch(spl[spl.length - 1]) {
    case "_index.md":
      branch.push({
        file: page,
        route: page.split("/").slice(3, -1).join("/"),
        mod: mdPages[page],
      })
      break
    case "index.md":
      leaf.push({
        file: page,
        route: page.split("/").slice(3, -1).join("/"),
        mod: mdPages[page],
      })
      break
    default:
      leaf.push({
        file: page,
        route: page.replace(/^\/src\/content\//, "").replace(/\.md$/, ""),
        mod: mdPages[page],
      })
      break
  }
}

//console.log("leaf:", leaf)
//console.log("branch:", branch)
