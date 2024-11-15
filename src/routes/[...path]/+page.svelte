<script lang="ts">
  import PostList from "$lib/postList.svelte"

  const { data } = $props()
  const Content = $derived(data.Content)

  const title = $derived(
    data.path === "" || data.meta.title === ""
      ? "akku's website"
      : `${data.meta.title} | akku's website`
  )

  const keywords = $derived(
    data.meta.tags ? data.meta.tags.join(",") : ""
  )
</script>

<svelte:head>
  <title>{title}</title>

  <!-- https://github.com/akku1139/hugo-bearhouse/blob/3f4f722ae27a73baa8650ce97255b2807db80768/layouts/partials/seo_tags.html -->
  <!-- Primary Meta Tags -->
  <meta name="title" content={ data.meta.title ?? "akku's website" } />
  <meta name="description" content={ data.meta.summary ?? "akku's website" } />
  <!-- <meta name="keywords" content="{{ if .IsPage}}{{ range $index, $tag := .Params.tags }}{{ $tag }},{{ end }}{{ else }}{{ range $plural, $terms := .Site.Taxonomies }}{{ range $term, $val := $terms }}{{ printf "%s," $term }}{{ end }}{{ end }}{{ end }}" /> -->

  <!-- Open Graph / Facebook -->
  <!-- Source: https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/opengraph.html -->
  <meta property="og:title" content={ data.meta.title ?? "akku's website" } />
  <meta property="og:description" content={ data.meta.summary ?? "akku's website" } />
  <meta property="og:type" content={ data.branch ? "website" : "article" } />
  <meta property="og:url" content="/{ data.path }/" />

  <!-- <meta property="og:image" content="{{ $card.Permalink | absURL }}"/> -->

  {#if !data.branch }
    {#if data.base }
      <meta property="article:section" content={ data.base } />
    {/if}
    {#if data.meta.date}
      <meta property="article:published_time" content={ data.meta.date } />
    {/if}
    {#if data.meta.lastmod}
      <meta itemprop="article:modified_time" content={ data.meta.lastmod } />
    {/if}
  {/if}

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
  {#if !data.branch && data.meta.tags}
    <meta itemprop="keywords" content={ keywords } />
  {/if}
</svelte:head>

<!-- is this reactive?-->
{#if !data.branch && data.meta.title}
  <h1>{data.meta.title}</h1>
  <p class="byline">
    <time datetime="{data.date}" pubdate="">{data.date}</time>
    {#if data.lastmod !== ""}
      (Last updated: <time datetime="{data.lastmod}" pubdate="">{data.lastmod}</time>)
    {/if}
  </p>
{/if}

<content>
  <Content />
</content>

<p>
  {#if !data.branch}
    {#each data.meta.tags as tag}
      <a class="blog-tags" href="/tags/{tag}/">#{tag}</a>
    {/each}
  {/if}
</p>

{#if data.branch && data.path !== ""}
  <PostList posts={data.childPages} />
{/if}
