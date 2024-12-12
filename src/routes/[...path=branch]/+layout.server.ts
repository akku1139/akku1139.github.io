import { tags } from "$lib/server/tags.ts"

export const load = () => {
  return {
    tags,
    keywords: tags.join(",")+",",
  }
}
