<script lang="ts">
  let { data } = $props()
  console.log("data (page):", data)
  let { Content } = data
</script>

<Content />
