export const GET = ({ params }) => {
  return fetch(params.url)
}

export const prerender = true
