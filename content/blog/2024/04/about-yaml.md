---
title: YAMLについて
summary: 最近よくYAMLを見かけますが、私がYAMLに対してどのような感想を持っているのか説明します。
tags: ["YAML"]
date: 2024-04-21
---

YAML、流行っていますよね。

私はYAMLを嫌いなのですが、多くの場所で使っています。


## 手っ取り早いYAML

このブログはHugoとMarkdownで書いています。FrontmatterにはYAMLを採用しています。

HugoではFrontmatterに

- JSON
- TOML
- YAML

を選択できます。
私はYAMLを嫌いですがYAMLを選択しました。

YAMLは直感的に短時間で書きやすいからです。

JSONと比較してみましょう。


### 1. `{}` が不要

まず、トップレベルの括弧が必要ありません。

JSONでFrontmatterを書く場合、`{}` を書くことを必要となります。
YAMLの場合、そうではありません。

`---` から `---` で囲うことは `{}` と同じように感じるかもしれませんが、インデントの問題です。

私は綺麗なインデント[要出典] を書くように幼い頃から教育されましたため、`{}` はインデントを必要です。

しかし `---` はそのような心理は発生しません。


### 2. `"` が不要

次に、キーのダブルクォートが必要ありません。

JSONでは

```json
{
  "key": "value"
}
```

と書きます。(ここでもインデントの癖がありますね)

しかし、ほとんどの場合keyは文字列型になりますからダブルクォートは不要です。

JSONは `JavaScript Object Notation` の略ですが、ほとんどのJavaScriptプログラマーはkeyをクォートしないと思います。

CSS in JS を見ていると本当にそう感じます。

では、YAMLの場合 `key: value` か `key: "value"` を使用できます。

簡単ですね。


### 3. 時刻型

これは気分の問題ですが、時刻型は良いと思います。

他の設定ファイルは実装しません。


### 4. カンマ不要

YAMLではカンマを書く必要がありません。

keyを増やした際にdiffが2行出来るので
JSONユーザーは最も苦しめられたことだと思います。

JSON5はケツカンマを許可することで解決しましたが、
YAMLはカンマを書かないことで解決しました。


### 5. シンタックスハイライトやプレビュー

MarkdownのFrontmatterをYAMLで書くといい感じにハイライトが入ります。

また、GitHubのプレビューでも表を作ってくれます。


## しかしYAMLを嫌いなのは何故?

ここまでYAMLのプロパガンダ記事を書きました。

しかし私がYAMLを大嫌いなのは皆さんご存知のとおりでしょう。

ではその理由を解説します。


### 1. 曖昧なvalue

例えば `key: value` が使用できます。

この場合、valueは文字列型であると解釈されます。

JavaScriptでkeyのクォートは省略しますが、valueのクォートまでは省略しませんよ!


### 2. 標準ライブラリじゃない

Pythonは「バッテリー同梱」(追加ライブラリ無しで十分に使える) というコンセプトがあります。

JSONはもちろん `import json` で使用できます。

TOMLは Python 3.11 から `tomllib` としてバッテリーに追加されました。

しかし、YAMLは未だに外部ライブラリです。


### 3. ノルウェー問題

これは「曖昧なvalue」の応用です。

このYAMLはどのように解釈されるでしょうか?

```yaml
Japan:
  lang: ja
Norway:
  lang: no
```
([人間が書くための設定ファイルに何を選ぶのか](https://qiita.com/Nabetani/items/56f8097b92385ad276fc) より引用・改変)

普通のプログラマがYAMLを初めて見たなら下のように考えます。

```json
{
  "Japan": {
    "lang": "ja"
  },
  "Norway": {
    "lang": "no"
  }
}
```

なんと、実際の解釈はこうです!

```json
{
  "Japan": {
    "lang": "ja"
  },
  "Norway": {
    "lang": false
  }
}
```

`no` は `false` と同じ扱いです!


### 4. 複数行文字列が意味不明

YAMLを書いているときに複数行文字列を書きたくなりました!

```yaml
text0:
  吾輩は猫である
  名前はまだ無い
text1: |-
  吾輩は猫である
  名前はまだ無い
text2: >-
  吾輩は猫である
  名前はまだ無い
text3: "\
  吾輩は猫である\
  名前はまだ無い"
```
([YAMLで複数行テキストを書きたい時のあれこれ](https://qiita.com/jerrywdlee/items/d5d31c10617ec7342d56) より引用)

どれが正解ですか?

YAMLユーザーはこれを覚える必要があります。


### 5. リスト表記がわかりにくい

```yaml
list:
 - value1
 - value2
 - value3
```

これなら簡単ですが、[このブログをGitHub Pagesへデプロイするために使用しているWorkflowファイル](https://github.com/akku1139/akku1139.github.io/blob/main/.github/workflows/deploy.yml)を見てみましょう。

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.124.0
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4

      - name: Cache bin
        id: cache-bin
        uses: actions/cache@v4
        with:
          path: ./bin
          key: bin-cache-hugo-${{ env.HUGO_VERSION }}
```

書いているときは思考放棄です。

単一文字列とオブジェクトが同じように書かれました。


## 結論

あくまでも私の感想ですが、YAMLはFrontmatterやちょっとしたメモ書きに使用する程度には素晴らしいフォーマットだと思います。

しかし、これをまともに設定ファイルで使用するのは狂っています。

あらゆるところにミスを引き起こすためのトリガーが埋め込まれています。

設定ファイルを作るなら、

- JSON (多くの標準)
- JSON5 (強い)
- TOML (JSONに囚われない)
- TypeScript (型安全かつプログラマブル)

をおすすめします。
