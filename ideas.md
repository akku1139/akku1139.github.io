## ブログ記事

- 何故Hugo?
- 仮想DOMはいらない
- Vite、何がよくて何がだめか。そしてRolldown
- コマンド紹介シリーズ
- Cloudflare Pages vs GitHub Pages
- 分散SNSってよく言えば温故知新、悪く言えば車輪の再発明。
- ACメソッド 因数分解
- ED法 https://qiita.com/kanekanekaneko/items/901ee2837401750dfdad
- 分散型SNSで分断の加速
- JSRについて
- Deno等URL importについて
- 正しい日本語、間違った日本語
- 洋銀フルートについて
- カメラバグとタブレットモードから戻れないやつ
- JavaScriptの良いところと悪いところはNext.js見たら全部わかると言っても過言ではない
- 新聞広告とネット広告の違い
- Zero-configを卒業しよう
- 駿台模試のサイトが使いにくい

### 書きかけ

[漢字ネタ](content/blog/2024/04/japanese-without-kanji.md)

## 構造

sitemap.xml などのためにサブプロジェクトにルートを作って別リポのpagesで上書き
- yt-stream
- altproject

## 簡易書き換え機構

```js
document.addEventListener("click", (e) => {
  if(e.target.tagName === "A" && new URL(e.target.href).origin === location.origin) {
    fetch(e.target.href).then((r) =>
      r.text().then((t) => {
        history.pushState(null, null, e.target.href);
        document.documentElement.innerHTML = t;
        e.preventDefault();
      })
    );
  }
});
```

## ページ専用JS, CSS, etc...ロード機構

https://discourse.gohugo.io/t/how-to-load-some-selected-js-scripts-on-selected-pages-only/33665
