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

<Content />

<!-- Different from Bearcub -->
{#if data.branch}
<ul class="blog-posts">
  {#each data.children as child}
    {#await child.mod then mod}
      <li>
        <!-- <span><i><time datetime="{mod.metadata.date}" pubdate="">{mod.metadata.date}</time></i></span> -->
        <a href="{child.route}"><!-- {mod.metadata.title} -->{child.route}</a>
      </li>
    {/await}
  {/each}
</ul>
{/if}
