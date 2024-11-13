import { branch, leaf } from "$lib/server/hugoBundle.ts"

const pages = [...branch, ...leaf]

export const entries = () => {
  return pages.map(f => ({
    path: f.route,
  }))
}

export const load = async ({ params }) => {
  const page = await import(pages[params.path])
  return {
    Content: page.default,
  }
}
