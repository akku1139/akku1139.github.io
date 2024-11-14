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
  const meta = page.metadata ?? {}
  const branch = route.branch
  // const children = route.children
  let childPages = []

  if(branch) {
    childPages = await Promise.all(route.children.map(async post => {
      const mod = await post.mod()
      return {
        date: yyyymmdd(mod.metadata.date),
        title: mod.metadata.title,
        route: post.route,
      }
    }))
  }

  return {
    Content: page.default,
    meta,
    path,
    date: yyyymmdd(meta.date),
    lastmod: yyyymmdd(meta.lastmod),
    // children,
    childPages,
    branch,
  }
}
