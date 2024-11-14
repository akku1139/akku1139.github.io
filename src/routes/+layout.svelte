<script lang="ts">
import "./global.css"

const props = $props()
console.log(props)

let title = "test"

/*
// Not reactive?
if (data.path === "" || data.meta.title === "") {
  title ="akku's website"
} else {
  title = `${data.meta.title} | akku's website`
}
*/
</script>

<svelte:head>
  <title>{title}</title>
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
    <!-- <a href="/index.xml">RSS</a> -->
  </nav>
</header>

<main id="main-content">
  <slot />
</main>

<footer>
-akku- | made with SvelteKit
</footer>
