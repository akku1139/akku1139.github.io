import { routes } from "$lib/hugoBundle.ts"
import { tags } from "$lib/server/tags.ts"
import { yyyymmdd } from "$lib/date.ts"

export const load = async () => {
  const route = routes[""]
  const page = await route.mod()
  const meta = page.metadata ?? {}

  return {
    meta,
    date: yyyymmdd(meta.date),
    lastmod: yyyymmdd(meta.lastmod),
    keywords: tags.join(",")+",",
  }
}
