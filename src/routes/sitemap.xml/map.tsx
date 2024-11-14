import { pages } from "$lib/hugoBundle.ts"

const data = await Promise.all(pages.map(async r => {
  const meta = (await r.mod()).metadata ?? {}
  return <url>
    <loc>https://akku1139.github.io/{ r.route }</loc>
    <lastmod>{ meta.date ?? new Date().toISOString() }</lastmod>
  </url>
}))

export default '<?xml version="1.0" encoding="utf-8" standalone="yes"?>'
  + <urlset>{ data }</urlset>
