import { pages, routes } from "$lib/hugoBundle.ts"
import { yyyymmdd } from "$lib/date.ts"

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
    date: yyyymmdd(page.metadata.date),
    lastmod: page.metadata.lastmod && yyyymmdd(page.metadata.lastmod),
    children: route.children,
    branch: route.branch,
  }
}
