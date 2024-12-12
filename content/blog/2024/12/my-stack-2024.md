---
title: 2024年に使った技術たち
summary: 私が2024年に作ったものとそれで使った技術の振り返りです。
date: 2024-12-12
tags:
  - プログラミング
---

## TL; DR

- Solid.js + Hono + Drizzle Kit + Cloudflare D1 + Tailwind CSS + PostCSS + ESBuild + Cloudflare Pages
- SvelteKit
- Discord.py
- HTML + CSS
- Shell Script (bash)
- Solid.js
- Hono

## Solid.js + Hono + Drizzle Kit + Cloudflare D1 + Tailwind CSS + PostCSS + ESBuild + Cloudflare Pages

プロジェクト: 予約サイト

https://github.com/akku1139/yoyaku-oss

技術選定の背景: 開発期間が短かったのである程度慣れているSolid.jsを使いたかった

良かった点

- Solid.jsは仮想DOMじゃなくて精神衛生上良い
- Drizzle Kitはかなり簡単
- Hono RPCが便利
- Tailwind CSSは適当でもいい感じになった

悪かった点

- 最初はViteを使う予定だったが、Viteでサーバー・クライアントをそれぞれビルドしたりプレビューしたりするのを自前で作るのはとてもめんどくさかった
- 次にRsPackを試したがこれもめんどくさかった
- 最終的にESBuildでプレビューは諦めた
- Solid.jsの `<Show>` の使い勝手がちょっと悪い
- D1で `references()` 関連の謎のエラーが起きたりする (最終的に `references()` を落とした) (多分私のSQL知識不足)
- Tailwindの `@apply` によって読みにくいコードになった

## SvelteKit

プロジェクト

- このサイトのSvelteKit移植ブランチ https://github.com/akku1139/akku1139.github.io/tree/sveltekit
- 各種Wipプロジェクト
- とあるSNSのフロンエンド

技術選定の背景

- 仮想DOMじゃない
- SolidStartよりも洗練されてる
- ディレクトリベースのルーターが好き

良かった点

- 普通に使いやすい
- ルーティングがわかりやすい
- TypeScriptサポートが微妙だった (Svelte 5で改善)

悪かった点

- Svelte 5で結構色々変わった
- Web版VSCodeで拡張機能がない (HTMLでハイライトして使ってる)

## Discord.py

プロジェクト

- selfbot (Discord.py-self) https://github.com/akku1139/selfbot
- NullBot v2 https://github.com/akku1139/Null-Bot-v2

技術選定の背景: 有名だった

良かった点

- かなり書きやすい
- Extensions + Cogsで高度かつ簡単にホットリードできる
- Jishakuがある

悪かった点

- TypeScriptと比べると型サポートが微妙
- 公式ドキュメントが巨大すぎて開くのに時間がかかる
- コード例が少ない

## HTML + CSS

プロジェクト: 雑多

技術選定の背景: ビルドとか依存関係とか何もなしで簡単

良かった点

- ビルドがないのでデプロイの設定が簡単

悪かった点

- フレームワークの恩恵に頼りたかった

## Shell Script (bash)

プロジェクト

- Auto-AUR https://github.com/akku1139/auto-aur
- GitHub Actions
- 雑多なもの

技術選定の背景: (Windowsじゃなければ)基本的にどこでも動く

良かった点

- 考えることが少ない
- コマンド呼び出しが超簡単

悪かった点

- 相対パスを考えるのがちょっとだるい
- ロジック系の書き方がほかと違う
- 時々理解の範疇を超える

## Solid.js

プロジェクト

- 暗記アプリ (+ Tailwind CSS) https://github.com/akku1139/anki-app
- yt-stream https://github.com/akku1139/yt-stream

技術選定の背景

- 仮想DOMじゃない
- Svelteに疲れた
- JSX書いてみたかった

良かった点

- JSXは思ったよりも書きやすい
- JSXは一応Web版VSCodeでも書ける

悪かった点

- JSXは気持ち悪いコードを書きやすい
- 仮想DOMを使わず最適化するため制約がある (本気で最適化を頑張れば三項演算子とかmapとか使えるようになるはず)

## Hono

プロジェクト

- akku-tools https://github.com/akku1139/akku-tools
- ogratch https://github.com/nakasyou/ogratch
- とあるSNSのバックエンド
- その他色々

技術選定の背景: Cloudlare Page Functionsで動く

良かった点

- 書きやすい! (FastAPIとは別の方向)
- JSXでHTMLとか作れる (このサイトのSvelteKit移植ブランチでもRSSとSitemap生成に使ってる)
- 日本人が開発してて日本語の情報が多い
- Hono RPCが便利

悪かった点

- ファイルを分けるときにいちいちパス設定するのがめんどくさい
- HonoXで[ディレクトリベースルーターを提案した](https://github.com/honojs/honox/issues/45)けどちょっと違う感じになった (個人の意見です)

以上。
