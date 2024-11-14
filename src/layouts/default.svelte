<!--
https://github.com/pngwn/MDsveX/issues/455
https://github.com/pngwn/MDsveX/issues/287
https://qiita.com/toshimin/items/5f13c3b4c28825219231
-->

<script context="module" lang="ts">
	// import { P, H1, H2, H3, h4 } from './components/';

	// export const p = P,
	// 	h1 = H1;
	// export { H3 as h3 };
	// export { h4, H2 as h2 };

	// export function em() {}

	// export class strong {}
  const md = metadata
  export const metadata = {
    ...md,
  }

  const { children } = $props()
</script>

{@render children()}
