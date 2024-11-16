<script lang="ts">
  import PostList from "$lib/components/postList.svelte"

  const { data } = $props()
  const Content = $derived(data.Content)

  const title = $derived(
    data.title
  )

  const keywords = [] // all tags
</script>

<svelte:head>
  <title>{title}</title>

  <!-- https://github.com/akku1139/hugo-bearhouse/blob/3f4f722ae27a73baa8650ce97255b2807db80768/layouts/partials/seo_tags.html -->
  <!-- Primary Meta Tags -->
  <meta name="title" content={ data.title ?? "akku's website" } />
  <meta name="description" content={ data.meta.summary ?? "akku's website" } />
  <!-- <meta name="keywords" content="{{ if .IsPage}}{{ range $index, $tag := .Params.tags }}{{ $tag }},{{ end }}{{ else }}{{ range $plural, $terms := .Site.Taxonomies }}{{ range $term, $val := $terms }}{{ printf "%s," $term }}{{ end }}{{ end }}{{ end }}" /> -->

  <!-- Open Graph / Facebook -->
  <!-- Source: https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/opengraph.html -->
  <meta property="og:title" content={ data.meta.title ?? "akku's website" } />
  <meta property="og:description" content={ data.meta.summary ?? "akku's website" } />
  <meta property="og:type" content="website" />
  {#if data.path === ""}
    <meta property="og:url" content="/" />
  {:else}
    <meta property="og:url" content="/{ data.path }/" />
  {/if}

  <!-- <meta property="og:image" content="{{ $card.Permalink | absURL }}"/> -->

  <!-- {{- with .Params.audio }}<meta property="og:audio" content="{{ . }}" />{{ end }} -->
  <!-- <meta property="og:video" content="{{ . | absURL }}" /> -->

  <!-- Twitter -->
  <!-- Source: https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/twitter_cards.html -->
  <meta name="twitter:card" content="summary_large_image" />
  <!-- <meta name="twitter:image" content="{{ $card.Permalink | absURL }}"/> -->
  <meta name="twitter:title" content={ data.meta.title ?? "akku's website" } />
  <meta name="twitter:description" content={ data.meta.summary ?? "akku's website" } />

  <!-- Microdata -->
  <!-- Source: https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/schema.html -->
  <meta itemprop="name" content={ data.meta.title ?? "akku's website" } />
  <meta itemprop="description" content={ data.meta.summary ?? "akku's website" } />

  {#if data.meta.date}
    <meta itemprop="datePublished" content={ data.meta.date } />
  {/if}
  {#if data.meta.lastmod}
    <meta itemprop="dateModified" content={ data.meta.lastmod } />
  {/if}
  <!-- <meta itemprop="wordCount" content="{{ .WordCount }}" /> -->

  <!-- <meta itemprop="image" content="{{ $card.Permalink | absURL }}" /> -->

  <!-- Output all taxonomies as schema.org keywords -->
</svelte:head>

{#if data.path !== ""}
  <PostList posts={data.childPages} />
{/if}
