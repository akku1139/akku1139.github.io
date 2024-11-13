import { leaf } from "$lib/server/HugoBundle.ts"

export const entries = () => {
  return leaf.map(f => f.route)
}

export const load = ({ params }) => {
  return {
    importPath: branch[params.path]
  }
}
