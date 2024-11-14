<!--
https://github.com/pngwn/MDsveX/issues/455
https://github.com/pngwn/MDsveX/issues/287
https://qiita.com/toshimin/items/5f13c3b4c28825219231
https://github.com/pngwn/MDsveX/blob/f29f31c281c93a1f5e604ccc9f8e4cc14208a8d8/packages/mdsvex/test/_fixtures/LayoutThreeWithComponents.svelte
-->

<script module lang="ts">
  import { h1, h2 } from "./tags"
  // export * from "./tags"

  const md = metadata
  export const metadata = {
    ...md,
  }

  const { children } = $props()

  console.log("md:", metadata)
</script>

{@render children()}
