---
title: YouTube Musicの改悪を回避する方法
summary: YouTube Musicでタブを変えると音楽が停止するようになったので修正方法です。
date: 2024-11-22
---

今日YouTube Musicを開くとUIが大きく変わり、**他のタブに移ると音楽が停止するようになりました**。

これはおそらくA/Bテストです。

プライベート窓でのUIと動作は変更されていませんでした。

## 結論

ユーザースクリプトで `visibilitychange` イベントを無効化します。

```js
// ==UserScript==
// @name        No stop YouTube Music
// @namespace   Violentmonkey Scripts
// @match       https://music.youtube.com/*
// @grant       none
// @author      akku
// @description 11/22/2024, 7:29:38 PM
// @description YouTube music has been modified to detect tab transitions and stop the music.
// @run-at      document-start
// ==/UserScript==

// https://gist.github.com/akku1139/29133fcecf9bbb981908fed7ab4bad5f
// https://zenn.dev/raihara3/articles/20220214_background_tab
// https://gist.github.com/lchanouha/06b51423bc60693af216ebdce37d86a8
// Sourced from: https://stackoverflow.com/questions/47660653/chrome-extension-how-to-disable-page-visibility-api

window.addEventListener("visibilitychange", (e) => {
  e.stopImmediatePropagation()
}, true)
```

[GitHub Gistで見る](https://gist.github.com/akku1139/29133fcecf9bbb981908fed7ab4bad5f)

ユーザースクリプトのインストール方法は[過去の記事](/blog/discord-cat/#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E7%89%88%E3%81%AE%E5%85%A5%E3%82%8C%E6%96%B9/)を参照してください。

## 他に

[YouTube Music: Audio Only](https://greasyfork.org/en/scripts/486384-youtube-music-audio-only) は新しいUIで動作しないようです。

[YouTube CPU Tamer by AnimationFrame](https://greasyfork.org/en/scripts/431573-youtube-cpu-tamer-by-animationframe) も入れていますが効果はわかりません。

以上。
