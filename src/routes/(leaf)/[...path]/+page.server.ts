import { leaf } from "$lib/server/HugoBundle.ts"

export const entries = () => {
  return leaf.map(f => f.route)
}
