import { routes } from "$lib/hugoBundle.ts"

export const match = (rawPath => {
  const path = rawPath.replace(/\/$/, "")
  const route = routes[path]
  const branch = route.branch
  return branch
})
