<script lang="ts">
  import { yyyymmdd } from "./date.ts"
  const { posts } = $props()
</script>

<ul class="blog-posts" data-sveltekit-preload-data="tap">
  {#each posts as post}
    <!--
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
    -->
    <li>
      <span>
        <i>
          <time datetime="{ post.date }" pubdate>
            { post.date }
          </time>
        </i>
      </span>
      <a href="/{ post.route }">{ post.title }</a>
    </li>
  {:else}
    <li>
      No posts yet
    </li>
  {/each}
</ul>
