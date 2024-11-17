import { routes } from "$lib/hugoBundle.ts"

export const match = (rawPath => {
  const path = rawPath.replace(/\/$/, "")
  const route = routes[path] ?? { branch: false }
  console.log("matcher (branch):", rawPath, route)
  const branch = route.branch
  return branch
})
