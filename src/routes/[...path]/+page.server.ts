const rawPages = import.meta.glob("~/content/**/*.md")

let leaf
let brunch

let spl

for(page in rawPages) {
  spl = page.split("/")

  switch(spl[spl.lengh]) {
    case "_index.md":

    case "index.md":
    default:

  }
}

export const entries = () => {
}
