const rawPages = import.meta.glob("~/content/**/*.md")

let leaf
let brunch

let spl

for(let page in rawPages) {
  spl = page.split("/")

  switch(spl[spl.length]) {
    case "_index.md":

    case "index.md":
    default:

  }
}

export const entries = () => {
  return []
}
