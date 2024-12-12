import { routes } from "$lib/hugoBundle.ts"

export const load = async ({ data }) => {
  const page = await routes[""].mod()

  return {
    ...data,
    Content: page.default,
  }
}
