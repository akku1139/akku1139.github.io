<script lang="ts">
  import PostList from "$lib/postList.svelte"

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
  <PostList posts={data.children} />
{/if}
