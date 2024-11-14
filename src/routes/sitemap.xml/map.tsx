import { pages } from "$lib/hugoBundle.ts"

const data = await Promise.all(pages.map(async r => {
  return <>
    <loc>https://.../{ r.route }</loc>
    <lastmod>{ (await r.mod()).metadata.date }</lastmod>
  </>
}))

export default '<?xml version="1.0" encoding="utf-8" standalone="yes"?>'
  + <urlset>{ data }</urlset>

// import.meta.env.BASE_URL
