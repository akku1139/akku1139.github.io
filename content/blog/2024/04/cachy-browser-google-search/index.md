---
title: Cachy BrowserでGoogle検索を戻し方
summary: Cachy Browserを入れたらGoogle検索が削除されましたため修正します。
tags:
- Firefox
- CachyOS
date: 2024-04-07 15:00:00
---

0. ブラウザの終了
1. mozlz4を落とす

   https://github.com/jusw85/mozlz4

2. プロファイルフォルダに移動 `cd ~/.cachy/[あなたのプロファイル]`
3. `mozlz4-linux search.json.mozlz4 search.json`
4. `vi search.json`
5. Googleの "hidden":true を "hidden":false に置き換え

   ![作業](./edit.png)

7. `mozlz4-linux -z search.json search.json.mozlz4`
8. `rm search.json`
9. ブラウザを起動

   ![画面](./setting.png)

以上。
