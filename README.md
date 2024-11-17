# akku's website

## TODOs

- format, lint, auto fix (Pull Request)
- TypeCheck
- JSON-LD https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=ja
- Use farm?
- Code block highlight
- sort postlist
- site config (json, ts, yaml, toml)

## Issues

- blogmura img with mdsvex-enhanced-images
- MD assets (e.g. img) aren't loaded without enhancedImages(),
- Make high-resolution images the default
- lolify page list (hugoBundle.ts) (server lib?)
- new Date() vs Date.parse() and TimeZone
- Illegal invocation with enhanced-image (first load page)
  Uncaught (in promise) TypeError: 'get nextSibling' called on an object that does not implement interface Node.
- phony page (yt-stream etc...) (Avoiding reload loops)
- Dev server not working
- code block color https://vscode.dev/github.com/akku1139/akku1139.github.io/blob/sveltekit/src/routes/global.css#L86
- fallback description
- RSS child branch

## Memo

https://svelte.dev/docs/svelte/v5-migration-guide

https://mdsvex.pngwn.io/docs

https://github.com/spences10/sveltekit-mdsvex-starter-blog

https://github.com/akku1139/hugo-bearhouse

https://svelte.dev/docs/kit/images

https://stackoverflow.com/questions/58606345/svelte-head-title-suffix

ToC
https://github.com/pngwn/MDsveX/discussions/268

https://ics.media/entry/13324/

### remark-gfm vs remark-github

https://github.com/orgs/remarkjs/discussions/1024

https://github.com/remarkjs/remark-gfm

https://github.com/remarkjs/remark-github

https://github.com/pngwn/MDsveX/issues/475

### OGP

https://u-618.org/ogp%E3%81%A7meta%E3%81%AB%E6%9B%B8%E3%81%8F%E3%81%82%E3%82%8C%E3%81%93%E3%82%8C/

https://webtech.fukushimaku.jp/kiji/ogp-open-graph-protocol-knowledge.html

## Hugo output (without dirs)

https://github.com/akku1139/akku1139.github.io/actions/runs/11766616514/job/32774363867

```
./contact/index.html
./categories/index.html
./categories/index.xml
./works/index.html
./robots.txt
./about/index.html
./altproject/index.html
./blog/3rd-pc/index.html
./blog/org-chromebook-personal-account/index.html
./blog/goodbye-ads/index.html
./blog/org-chromebook-personal-account-3/index.html
./blog/mutual-link-nakasyou/index.html
./blog/inspiron-upgrade-2/index.html
./blog/disable-chromebook-android/index.html
./blog/ai-replace-humans/index.html
./blog/about-yaml/index.html
./blog/please-disable-javascript-to-view-this-site/index.html
./blog/monero-mining-pool/index.html
./blog/offline-pc-safe/index.html
./blog/org-chromebook-personal-account-2/index.html
./blog/cachy-browser-google-search/setting.png
./blog/cachy-browser-google-search/index.html
./blog/cachy-browser-google-search/edit.png
./blog/index.html
./blog/cherish-the-obvious/index.html
./blog/auto-aur-released/index.html
./blog/change-firefox-developer-edition-to-cachy-browser/index.html
./blog/global-namespace-pollution/index.html
./blog/index.xml
./blog/chromeos129-bug/index.html
./blog/inspiron-upgrade-1/index.html
./blog/hello/index.html
./blog/blu-and-root-rights/index.html
./blog/discord-cat/2.png
./blog/discord-cat/0.png
./blog/discord-cat/4.png
./blog/discord-cat/index.html
./blog/discord-cat/3.png
./blog/discord-cat/1.png
./blog/discord-cat/5.png
./blog/banks-are-dangerous/index.html
./images/favicon.png
./books/index.html
./books/index.xml
./books/return-isekai/index.html
./books/return-isekai/index.xml
./google752e603e5f09db6e.html
./index.html
./sitemap.xml
./yt-stream/index.html
./original.min.css
./.well-known/discord
./index.xml
./tags/セキュリティ/index.html
./tags/セキュリティ/index.xml
./tags/pc/index.html
./tags/pc/index.xml
./tags/discord/index.html
./tags/discord/index.xml
./tags/yaml/index.html
./tags/yaml/index.xml
./tags/スマホ/index.html
./tags/スマホ/index.xml
./tags/cachyos/index.html
./tags/cachyos/index.xml
./tags/ai/index.html
./tags/ai/index.xml
./tags/chromebook/index.html
./tags/chromebook/index.xml
./tags/プログラミング/index.html
./tags/プログラミング/index.xml
./tags/マイニング/index.html
./tags/マイニング/index.xml
./tags/firefox/index.html
./tags/firefox/index.xml
./tags/inspiron3647/index.html
./tags/inspiron3647/index.xml
./tags/index.html
./tags/auto-aur/index.html
./tags/auto-aur/index.xml
./tags/index.xml
./tags/仮想通貨/index.html
./tags/仮想通貨/index.xml
./tags/monero/index.html
./tags/monero/index.xml
./tags/archlinux/index.html
./tags/archlinux/index.xml
./tags/タブレット/index.html
./tags/タブレット/index.xml
./syntax.min.css
./404.html
```
