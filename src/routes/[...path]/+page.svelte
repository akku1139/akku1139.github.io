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
    <li>
      <span><i><time datetime="{child.meta.date}" pubdate="">{child.meta.date}</time></i></span>
      <a href="{child.route}">{child.meta.title}</a>
    </li>
  {/each}
</ul>
{/if}
