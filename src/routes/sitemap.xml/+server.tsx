import { pages } from "$lib/hugoBundle.ts"
import { tags } from "$lib/server/tags.ts"

const data = await Promise.all(pages.map(async r => {
  const meta = (await r.mod()).metadata ?? {}
  return <url>
    <loc>https://akku1139.github.io/{ r.route === "" ? "" : (r.route + "/") }</loc>
    <lastmod>{ meta.date ?? new Date().toISOString() }</lastmod>
  </url>
}))

export const GET = () => {
  return new Response(
    '<?xml version="1.0" encoding="utf-8" standalone="yes"?>'
    + <urlset>{[
      ...data,
      tags.map(t => <url>
        <loc>https://akku1139.github.io/tags/{ encodeURIComponent(t) }/</loc>
        <lastmod>{ new Date().toISOString() }</lastmod>
      </url>),
      <url>
        <loc>https://akku1139.github.io/tags/</loc>
        <lastmod>{ new Date().toISOString() }</lastmod>
      </url>
    ]}</urlset>
  )
}

export const prerender = true
export const trailingSlash = "never"