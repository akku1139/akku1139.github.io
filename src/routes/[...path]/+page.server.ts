import { pages } from "$lib/hugoBundle.ts"

export const entries = () => {
  return pages.map(f => ({
    path: f.route,
  }))
}
