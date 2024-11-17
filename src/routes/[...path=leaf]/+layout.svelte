<script lang="ts">
  const { children } = $props()
</script>

<svelte:head>
  <meta property="og:type" content="article" />
</svelte:head>

{@render children()}
