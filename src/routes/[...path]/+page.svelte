<script lang="ts">
  const { data } = $props()
  const Content = $derived(data.Content)

  const title = $derived(
    data.path === "" || data.meta.title === ""
      ? "akku's website"
      : `${data.meta.title} | akku's website`
  )

  $effect(() => {
    console.log(data)
  })
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content />
