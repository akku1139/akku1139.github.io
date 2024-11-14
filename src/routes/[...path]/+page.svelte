<script lang="ts">
  console.log("page start")
  const { data } = $props()
  console.log("data:", data)
  // console.log("data (page):", data)
  const { Content } = data

  let title = $derived(
    data.path === "" || data.meta.title === ""
      ? "akku's website"
      : `${data.meta.title} | akku's website`
  )
  console.log("page end")
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content />
