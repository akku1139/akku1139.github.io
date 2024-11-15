export const load = async ({ data }) => {
  const page = await import(data.file)

  return {
    Content: page.default,
  }
}
