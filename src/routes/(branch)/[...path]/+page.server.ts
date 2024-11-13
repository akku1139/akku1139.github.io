import { branch } from "$lib/server/HugoBundle.ts"

export const entries = () => {
  return branch.map(f => f.route)
}

export const load = ({ params }) => {
  return {
    importPath: branch[params.path]
  }
}
