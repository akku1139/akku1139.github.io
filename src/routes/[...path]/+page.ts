import { branch, leaf } from "$lib/hugoBundle.ts"

const pages = [...branch, ...leaf]
const routes = Object.fromEntries(pages.map(page => [page.route, page]))
//console.log("routes:", routes)

export const entries = () => {
  return pages.map(f => ({
    path: f.route,
  }))
}

export const load = async ({ params }) => {
  console.log("load:", params.path, routes[params.path])
  const page = await routes[params.path].mod()
  return {
    Content: page.default,
  }
}

// +page.server.ts