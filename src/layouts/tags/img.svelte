<script lang="ts">
  const { src, enhanced="true", ...props } = $props()

  console.log("img:", src, props)
  // Since each page is small, it may be better not to do lazy loading.
</script>

{#if enhanced === "false"}
<img {src} {...props} />
{:else}
<enhanced:img {src} {...props} />
{/if}
