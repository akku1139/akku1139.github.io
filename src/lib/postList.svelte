<script lang="ts">
  import { yyyymmdd } from "./date.ts"
  const { posts } = $props()
</script>

<ul class="blog-posts">
  {#each posts as post}
    {#await post.mod() then mod}
      <li>
        <span>
          <i>
            <time datetime="{ yyyymmdd(mod.metadata.date) }" pubdate>
              { yyyymmdd(mod.metadata.date) }
            </time>
          </i>
        </span>
        <a href="/{ post.route }">{ mod.metadata.title }</a>
      </li>
    {/await}
  {:else}
    <li>
      No posts yet
    </li>
  {/each}
</ul>
