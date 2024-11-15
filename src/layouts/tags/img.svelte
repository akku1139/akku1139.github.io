<script lang="ts">
  const { enhanced="true", ...props } = $props()

  // Since each page is small, it may be better not to do lazy loading.
</script>

{#if enhanced === "false"}
<img {...props} />
{:else}
<enhanced:img {...props} />
{/if}
