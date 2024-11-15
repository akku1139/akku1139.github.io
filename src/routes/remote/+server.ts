export const GET = ({ url }) => {
  const target = url.searchParams.get("url")
  if(!target) {
    return new Response("Missing url")
  }
  return fetch(target)
}

export const prerender = true
