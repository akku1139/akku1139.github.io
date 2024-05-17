---
title: "無駄なコンテンツで溢れたWebサイトと広告ブロッカー"
date: 2024-05-17
---

皆さんはWebサイトのロード時間が長かったり、みたいコンテンツよりも不要なコンテンツで溢れていたなんていうことはありませんか?

多くのWebサイトは

- 広告 (主にGoolagアドセンス)
- 大きなヘッダー
- セルフプロモーション
- 不要なアニメーション
- なんのために使うかよくわからないJavaScript

等が含まれています。

実際これらの殆どの要素は必要ありません。 必要ならリーディングビュー、リーダーモードは不要ですね。

GoogleはWebを高速化すると言いながら自分たちはとても遅いアプリケーションを提供し(検索以外のアプリはロード時間がとても長い)、
あらゆるサイトに Google Tag Manager や Google AdSense を組み込み、Webサイトを遅く、訪問者を追跡します。

肝心の検索でも、[SEOの行われたコピペコンテンツを上位に表示し、本当に有用なコンテンツは表示されなくなっています](https://gigazine.net/news/20240117-google-search-worse-seo-spam/)。

本当にGoolagという言葉が表すとおりです。

ではこのようなゴミをどうすれば排除できるでしょうか?

答えは広告ブロッカーです。

- uBlock Origin ([公式サイト](https://ublockorigin.com/) [Chrome版](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) [Firefox版](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/))
- AdGuard ([公式サイト](https://adguard.com/) [Chrome版](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg) [Firefox版](https://addons.mozilla.org/en-US/firefox/addon/adguard-adblocker/))

のどちらかをインストールしてください。 それ以外は偽物と考えて問題ありません。

例えば、 AdBlocker Ultimate は低機能でライセンス違反なものを提供します。

uBlock (originではない)の開発は最早行われていません。

詳しくは以下の記事を読んでください。

https://github.com/Yuki2718/adblock2/wiki/%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F

また、[なんJ AdGuard部](https://wikiwiki.jp/nanj-adguard/)も参考になります。

広告ブロッカーを導入すれば多くの問題が解決します。

以上。
