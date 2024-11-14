<script lang="ts">
  const { children } = $props()
</script>

<h2 class="test" id="{children()}">{@render children()}</h2>
