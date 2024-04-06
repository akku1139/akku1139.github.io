---
title: 【簡単】 Firefox Developer EditionをCachy Browserに交換方法
summary: 悪戦苦闘の記録
date: 2024-04-07
---

こんにちは。最近2回もWebブラウザを交換している気がするのは気の所為でしょうか?

0. バックアップ

この先の作業は危険を伴いますから `~/.mozila/firefox` を安全にしてください。

1. Cachy Browserをインストール

```
pacman -S cachy-browser
```

2. 設定を移動する

```
mv .mozilla/firefox/ .cachy/
```

3. `compatibility.ini` を編集

Firefoxは起動するバージョンよりプロファイルが古いと問題が発生しますためプロファイルのバージョンを擬装する必要があります。

数バージョン違う程度であれば互換性に問題はないと思います。

`.cachy/[プロファイルフォルダ]/compatibility.ini` を以下のように変更してください。

```
[Compatibility]
LastVersion=(124.0.2_20240403172452/20240403172452 より古く)
LastOSABI=(そのまま)
LastPlatformDir=/usr/lib/cachy-browser
LastAppDir=/usr/lib/cachy-browser/browser
```

私の場合、FirefoxDevはv125、Cachyはv124がベースでしたため、互換バージョンはv123まで下げました。

4. Cachy Browserを起動

5. CanvasBlockerを無効化

Cachyがプライバシーのために導入するアドオンですが、これが有効の場合にDiscordを開いたらサイトデータが消し飛びました。

`about:addons` から無効化してください。

6. 設定の復元

Cachyはいくつかの設定を変更しましたためそれらを戻します。

特に、検索エンジンからGoogleを削除しました。

変更の全ては

- https://github.com/CachyOS/CachyOS-Browser-Common
- https://github.com/CachyOS/CachyOS-Browser-Settings

にあると思います。

以上。
