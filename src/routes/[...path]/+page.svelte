<script lang="ts">
  let { data } = $props()
  // console.log("data (page):", data)
  let { Content } = data
</script>

<svelte:head>
  <title>
    {#if data.path === "" || data.meta.title === ""}
      akku's website
    {:else}
      {data.meta.title} | akku's website
    {/if}
  </title>
</svelte:head>

<Content />
