const mdPages = import.meta.glob("~/../content/**/*.md")
const assets = import.meta.glob(["~/../content/**/*", "!~/../content/**/*.md"], {
  query: '?url',
  import: 'default',
})
//console.log("assets:", assets)

type HugoBundleFiles = Array<{
  file: string,
  route: string,
  mod: () => any
}>

const pl = (path: string) => {
  const sp = path.split("/")
  if (path === "blog") {
    return path
  } else if (sp[0] === "blog") {
    return sp[0] + "/" + sp[sp.length -1]
  } else {
    return path
  }
}

export let leaf: HugoBundleFiles = []
export let branch: HugoBundleFiles = []

let spl

for(let page in mdPages) {
  spl = page.split("/")

  switch(spl[spl.length - 1]) {
    case "_index.md":
      branch.push({
        file: page,
        route: pl(page.split("/").slice(2, -1).join("/")),
        mod: mdPages[page],
      })
      break
    case "index.md":
      leaf.push({
        file: page,
        route: pl(page.split("/").slice(2, -1).join("/")),
        mod: mdPages[page],
      })
      break
    default:
      leaf.push({
        file: page,
        route: pl(page.replace(/^\/content\//, "").replace(/\.md$/, "")),
        mod: mdPages[page],
      })
      break
  }
}

//console.log("leaf:", leaf)
//console.log("branch:", branch)
