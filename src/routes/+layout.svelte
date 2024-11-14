<script lang="ts">
  import "./global.css"

  let { children } = $props()
</script>

<header>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <a href="/" class="title"><h1>akku's website</h1></a>
  <nav>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/works/">Works</a>
    <a href="/blog/">Blog</a>
    <a href="/contact/">Contact</a>
    <!-- <a href="/index.xml">RSS</a> -->
  </nav>
</header>

<main id="main-content">
  {@render children()}
</main>

<footer>
-akku- | made with SvelteKit
</footer>
