<script lang="ts">
  const { children, ...props } = $props()
  let id = $state("")

	let h;

  $effect(() => {
    id = h.innerText
  })

</script>

<h5 bind:this={h} {id} {...props}>{@render children()}</h5>
