---
title: 組織で管理されたChromebookに個人アカウントを追加方法 Version 2
tags: ["Chromebook"]
date: 2024-06-11
---

[前の記事](/blog/org-chromebook-personal-account) の続きです。

リカバリーメールを入れなくても個人アカウントを追加できる方法を見つけました。

学校のChromebookのログイン画面でアカウントを追加しようとすると、`@g.なんとか.ed.jp` がデフォルトで付いています。

これは `DeviceLoginScreenDomainAutoComplete` というポリシーが原因です。

ポリシーの説明を読んでみましょう。

> このポリシーがドメイン名を表す文字列に設定されている場合は、Google ChromeOS でユーザーがログインする際に予測入力のオプションが表示されます。この場合、ユーザーはドメイン名の部分を省略してユーザー名を入力するだけで済みます。また、ユーザーはこのドメイン名の部分を上書きすることもできます。
> 
> 引用元: [chrome enterprise](https://chromeenterprise.google/policies/?policy=DeviceLoginScreenDomainAutoComplete)

「上書きできる」そうです。

では実践してみましょう。 ログイン画面を開いてください。

[ユーザーを追加] をクリックします。

メールアドレス入力欄があるので、 `@gmail.com` まで入力してください。

するとデフォルト値は上書きされて無事個人アカウントを追加できます。

以上。 🎉
