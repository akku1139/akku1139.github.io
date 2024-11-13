<script lang="ts">
  const { data } = $props();
  const Content = await import(data.importPath)
</script>

<svelte:component this={Content} />
