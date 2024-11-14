const mdPages = import.meta.glob("~/../content/**/*.md")
const assets = import.meta.glob(["~/../content/**/*", "!~/../content/**/*.md"], {
  query: '?url',
  import: 'default',
})

type HugoBundleFile = {
  file: string,
  route: string,
  mod: () => any,
  branch: boolean,
  children: HugoBundleFiles
}
type HugoBundleFiles = Array<HugoBundleFile>

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
        branch: true,
        children: [],
      })
      break
    case "index.md":
      leaf.push({
        file: page,
        route: pl(page.split("/").slice(2, -1).join("/")),
        mod: mdPages[page],
        branch: false,
        children: [],
      })
      break
    default:
      leaf.push({
        file: page,
        route: pl(page.replace(/^\/content\//, "").replace(/\.md$/, "")),
        mod: mdPages[page],
        branch: false,
        children: [],
      })
      break
  }
}

export const pages = [...branch, ...leaf]
export const routes = Object.fromEntries(pages.map(page => [page.route, page]))

pages.forEach(p => {
  const r = routes[p.route.split("/").slice(0, -1).join("/")]
  if(r.branch) {
    r.children.push(p)
  } else {
    throw new Error(`Leaf bundle has a subpage ${p.file}`)
  }
})
