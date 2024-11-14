<script lang="ts">
  const { data } = $props()
  const Content = $derived(data.Content)

  const title = $derived(
    data.path === "" || data.meta.title === ""
      ? "akku's website"
      : `${data.meta.title} | akku's website`
  )
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<!-- is this reactive?-->
{#if !data.branch && data.path !== "" && data.meta.title}
  <h1>{data.meta.title}</h1>
  <p class="byline">
    <time datetime="{data.date}" pubdate="">{data.date}</time>
    {#if data.lastmod !== ""}
      Last updated: <time datetime="{data.lastmod}" pubdate="">{data.lastmod}</time>
    {/if}
  </p>
{/if}

<content>
  <Content />
</content>
