import { pages } from "$lib/hugoBundle.ts"

const data = await Promise.all(pages.map(async r => {
  const meta = (await r.mod()).metadata ?? {}
  return <>
    <loc>{ import.meta.env.VITE_BASE_URL }{ r.route }</loc>
    <lastmod>{ meta.date ?? new Date().toISOString() }</lastmod>
  </>
}))

export default '<?xml version="1.0" encoding="utf-8" standalone="yes"?>'
  + <urlset>{ data }</urlset>

// import.meta.env.BASE_URL
