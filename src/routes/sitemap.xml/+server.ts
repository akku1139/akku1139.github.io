import map from "./map.tsx"

export const GET = () => {
  return new Response(map)
}

export const prerender = true
