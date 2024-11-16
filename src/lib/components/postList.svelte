<script lang="ts">
  import { yyyymmdd } from "$lib/date.ts"
  const { posts } = $props()
</script>

<ul class="blog-posts" data-sveltekit-preload-data="tap">
  {#each posts as post}
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
