import { routes } from "$lib/hugoBundle.ts"

export const match = (rawPath => {
  const path = rawPath.replace(/\/$/, "")
  const route = routes[path] ?? { branch: true }
  // console.log("matcher (leaf):", rawPath, route)
  const branch = route.branch
  return !branch
})
