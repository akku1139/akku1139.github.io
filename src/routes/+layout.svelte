<script lang="ts">
  import "./global.css"
  import "prism-themes/themes/prism-dracula.css"

  const { children } = $props()
</script>

<svelte:head>
  <meta name="author" content="akku" />
  <meta property="og:locale" content="ja_jp" />
  <meta name="twitter:site" content="@akku1139" />
</svelte:head>

<header>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <a href="/" class="title"><h1>akku's website</h1></a>
  <nav>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/works/">Works</a>
    <a href="/blog/">Blog</a>
    <a href="/contact/">Contact</a>
    <a href="/index.xml">RSS</a>
  </nav>
</header>

<main id="main-content">
  {@render children()}
</main>

<footer>
  <small>
    -akku- | made with SvelteKit
  </small>
</footer>
