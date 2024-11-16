import { tag, tags } from "$lib/server/tags.ts"
import { yyyymmdd } from "$lib/date.ts"

export const entries = () => {
  return tags.map(f => ({
    tag: f,
  }))
}

export const load = async ({ params }) => {
  const t = tag[params.tag.toLowerCase()]

  let childPages = []

  childPages = (await Promise.all(t.posts.map(async post => {
    const mod = await post.mod()
    return {
      date: yyyymmdd(mod.metadata.date),
      title: mod.metadata.title,
      route: post.route,
    }
  }))).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

  return {
    name: t.name,
    childPages,
    meta: {}, // for compatible
  }
}
