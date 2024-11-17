import { routes } from "$lib/hugoBundle.ts"

export const match = (rawPath => {
  const path = rawPath.replace(/\/$/, "")
  const route = routes[path]
  console.log("matcher (branch) path, route:", path, route)
  const branch = route.branch
  return branch
})
