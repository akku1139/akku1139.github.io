import { routes } from "$lib/hugoBundle.ts"

export default async (params) => {
  const path = params.path.replace(/\/$/, "")
  const route = routes[path]
  const page = await route.mod()
  const meta = page.metadata ?? {}

  const childPages = (await Promise.all(route.children.map(async post => {
    const mod = await post.mod()
    return {
      mod,
      meta: mod.metadata,
      route: post.route,
    }
  }))).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

  return "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>" +
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>akku's website</title>
        <link>https://akku1139.github.io/</link>
        <description>Recent content on akku's website</description>
        <generator>SvelteKit</generator>
        <language>ja-jp</language>
        {/* {{ with $authorEmail }}
        <managingEditor>{{.}}{{ with $authorName }} ({{ . }}){{ end }}</managingEditor>
        {{ end }}{{ with $authorEmail }}
        <webMaster>{{ . }}{{ with $authorName }} ({{ . }}){{ end }}</webMaster>
        {{ end }} */}
        <copyright>-akku-</copyright>
        <lastBuildDate>{ new Date().toISOString() }</lastBuildDate>
        <atom:link href="https://akku1139.github.io/index.xml" rel="self" type="application/rss+xml"/>
        { childPages.map(page => <item>
          <title>{ page.meta.title }</title>
          <link>https://akku1139.github.io/{ page.route === "" ? "" : (page.route + "/") }</link>
          <pubDate>{ meta.date }</pubDate>
          {/* {{- with $authorEmail }}<author>{{ . }}{{ with $authorName }} ({{ . }}){{ end }}</author>{{ end }} */}
          <guid>https://akku1139.github.io/{ page.route === "" ? "" : (page.route + "/") }</guid>
          <description>{}</description>
          <content:encoded>{"<![CDATA[" + page.mod.default /*.render().html*/ + "]]>" }</content:encoded>
        </item>) }
      </channel>
    </rss>
}
