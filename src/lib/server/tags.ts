import { leaf } from "$lib/hugoBundle.ts"

export const tag = {
  /*
  cachyos: {
    name: "CachyOS"
  }
  */
}

export const tags = Array.from(
  new Set(
    await Promise.all(
      leaf.map(async p => {
        const mod = await p.mod()
        const meta = mod.metadata ?? {}
        const t = meta.tags ?? []
        t.forEach(u => {
          const r = u.toLowerCase()
          if(!tag[r]) {
            tag[r] = { name: u, posts: [] }
          }
          tag[r].posts.push(p)
        })
        return t.map(y => y.toLowerCase())
      })
    )
  )
).flat()
