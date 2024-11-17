import rss from "./rss.tsx"

export const prerender = true
export const trailingSlash = "never"

export const GET = async ({ params }) => {
  return new Response(await rss(params))
}
