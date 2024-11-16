import { branch } from "$lib/hugoBundle.ts"

export const entries = () => {
  return branch.map(f => ({
    path: f.route,
  }))
}
