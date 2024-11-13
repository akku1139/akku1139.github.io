import map from "./map.tsx"

export const GET = ({ url }) => {
  return new Response(map)
}

export const prerender = true
