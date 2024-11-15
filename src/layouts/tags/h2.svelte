<script lang="ts">
  const { children } = $props()
  const id = $state()
</script>

<h2 bind:innerHTML={id} {id}>{@render children()}</h2>
