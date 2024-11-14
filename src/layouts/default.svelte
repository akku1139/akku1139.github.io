<!--
https://github.com/pngwn/MDsveX/issues/455
https://github.com/pngwn/MDsveX/issues/287
https://qiita.com/toshimin/items/5f13c3b4c28825219231
-->

<script context="module" lang="ts">
  import { h1, h2 } from "./tags"
  export * from "./tags"

  const md = metadata
  export const metadata = {
    ...md,
  }

  const { children } = $props()

  console.log("md:", metadata)
</script>

{@render children()}
