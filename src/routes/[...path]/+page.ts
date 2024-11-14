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
  const path = params.path.replace(/\/$/, "")

  //console.log(
    //"load:", path,
    //routes[path]
  //)

  const page = await routes[path].mod()
  return {
    Content: page.default,
    meta: page.metadata,
    path,
  }
}

// +page.server.ts
