<script lang="ts">
  import PostList from "$lib/components/postList.svelte"

  const { data, children } = $props()
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta itemprop="keywords" content={ data.keywords } />
</svelte:head>


<content>
  <content>
    {@render children()}
  </content>

  <PostList posts={data.childPages} />
  <div>
    {#each data.tags as tag}
      <a class="blog-tags" href="/tags/{tag}">#{ tag }</a> { " " }
    {/each}
  </div>
</content>
