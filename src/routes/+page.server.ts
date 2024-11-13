import { branch, leaf } from "$lib/server/HugoBundle.ts"

const pages = [...branch, ...leaf]

export const entries = () => {
  return pages.map(f => f.route)
}

export const load = ({ params }) => {
  return {
    importPath: pages[params.path]
  }
}
