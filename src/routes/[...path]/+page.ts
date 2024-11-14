import { routes } from "$lib/hugoBundle.ts"
import { yyyymmdd } from "$lib/date.ts"

export const load = async ({ params, data }) => {
  const path = params.path.replace(/\/$/, "")
  const route = routes[path]
  const page = await route.mod()
  const meta = page.metadata ?? {}
  const branch = route.branch

  return {
    Content: page.default,
    meta,
    path,
    date: yyyymmdd(meta.date),
    lastmod: yyyymmdd(meta.lastmod),
    childPages: data.childPages,
    branch,
  }
}
