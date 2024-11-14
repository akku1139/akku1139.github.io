import { pages, routes } from "$lib/hugoBundle.ts"

export const entries = () => {
  return pages.map(f => ({
    path: f.route,
  }))
}

export const load = async ({ params }) => {
  const path = params.path.replace(/\/$/, "")
  const route = routes[path]
  const page = await route.mod()
  return {
    Content: page.default,
    meta: page.metadata,
    path,
    children: route.children,
    branch: route.branch,
  }
}
