<script lang="ts">
  let { data } = $props()
  // console.log("data (page):", data)
  let { Content } = data

  let title = $derived(
    data.path === "" || data.meta.title === ""
      ? "akku's website"
      : `${data.meta.title} | akku's website`
  )
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content />
