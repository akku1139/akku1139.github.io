import { pages, routes } from "$lib/hugoBundle.ts"
import { tags } from "$lib/server/tags.ts"
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

  return {
    meta,
    date: yyyymmdd(meta.date),
    lastmod: yyyymmdd(meta.lastmod),
    keywords: tags.join(",")+",",
  }
}
