---
title: このサイトをSvelteKitへ移行中です
date: 2024-12-28
tags:
  - akku1139.github.io
---

早いものでもう年末ですね。
皆さんはどのようにお過ごしでしょうか?

私は古いタブレットにカスタムROMを移植しようと頑張っています。

ところで、このサイトのソースリポジトリである [akku1139/akku1139.github.io](https://github.com/akku1139/akku1139.github.io) に
`sveltekit` というブランチが生えているのはお気付きでしょうか?

ブランチ名やこの記事のタイトルから見て分る通り、`akku1139.github.io` は近々SvelteKitへ移行されます。

主な以降理由としては、

- SPA的に滑らかなページ遷移を行いたい
- Hugoのテーマに使う構文が非常に書きにくい
- より柔軟にコンテンツ管理をしたい
- 技術力の向上

と言ったあたりです。

別に Hugo + hugo-bearhouse (hugo-bearcubのフォーク) に大きな不満はないのですが、
微妙に使いにくいという感じです。

主な使用技術は

- SvelteKit
- Svelte
- MDsveX
- TypeScript
- Hono

となっています。

Honoを使っていることに驚くかもしれませんが、
これは `sitemap.xml` やRSSなどのXMLページを生成するためにHono JSXが便利だったためです。

現在は、殆どのページがほぼ同じように表示できるようになりました。

これからは、 `sitemap.xml` , RSS, metaタグ等に取り組んでいきます。

特に急いでいるわけでもないので完成は来年の5月頃になると思います。

最新の進捗を確認したい方は

リポジトリ: https://github.com/akku1139/akku1139.github.io/tree/sveltekit

プレビューデプロイ: https://sveltekit.akku1139-github-io.pages.dev/

をご覧ください。

以上。
