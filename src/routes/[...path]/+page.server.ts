import { branch, leaf } from "$lib/server/hugoBundle.ts"

const pages = [...branch, ...leaf]
const routes = Object.fromEntries(pages.map(page => [page.route, page]))
console.log("routes:", routes)

export const entries = () => {
  return pages.map(f => ({
    path: f.route,
  }))
}

export const load = async ({ params }) => {
  console.log("load:", params.path)
  const page = await import(pages[params.path].file)
  return {
    Content: page.default,
  }
}
