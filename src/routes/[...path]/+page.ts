import { routes } from "$lib/hugoBundle.ts"

export const load = async ({ data }) => {
  const path = params.path.replace(/\/$/, "")
  const route = routes[path]
  const page = await route.mod()
  const meta = page.metadata ?? {}
  const branch = route.branch

  // if(route === void 0) {
    // redirect(308, `/assets/${path}`)
  // }
  let childPages = []

  if(branch) {
    childPages = (await Promise.all(route.children.map(async post => {
      const mod = await post.mod()
      return {
        date: yyyymmdd(mod.metadata.date),
        title: mod.metadata.title,
        route: post.route,
      }
    }))).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  }

  return {
    path,
    meta,
    branch,
    childPages,
    base: route.route.split("/").slice(-2, -1)?.[0],
    date: yyyymmdd(meta.date),
    lastmod: yyyymmdd(meta.lastmod),
    Content: page.default,
  }
}
