import rss from "./rss.tsx"

export const prerender = true
export const trailingSlash = "never"

export const GET = () => {
  return new Response(rss)
}
