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
  const branch = route.branch
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
    childPages,
  }
}
