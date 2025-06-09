---
title: Tailscaleが便利過ぎる件について
date: 2025-06-09
tags: ["PC", "ネットワーク"]
---

自宅以外からも、[新しい(?)PC](/blog/3rd-pc-2/)を使いたい用途があるので、VPNを設定することにしました。

その際にTailscaleを使ったらとても簡単だったので、紹介記事です。

(この記事はプロモーションを含みません)

TailscaleはWireGuardベースのVPNサービスです。

[2025-06-09時点ででは、クレジットカード無しで、100台までのVPNを無料で構築できます](https://tailscale.com/pricing)。

無料枠がデカすぎます!

この記事では

- Chromebook (ChromeOS)
- Alpine Linux
- Arch Linux

でのインストール方法も解説します。
他のOSは現状使っていないのでこの記事では解説しません。
公式のインストール方法を読んだらいいと思います。


## Chromebook

Android版Tailscaleを入れたら動きます。

https://play.google.com/store/apps/details?id=com.tailscale.ipn

以上


## Alpine Linux

rooになって

`apk add tailscale tailscale-openrc`

`rc-update add tailscale`

`/etc/init.d/tailscale start`

`tailscale up`

をしたら、コンソールに表示されるログインURLを開いてログイン。

tailscaleのデーモンを `tailscale up` より前に起動する必要があるようです。

([Alpine Linux に Tailscale を入れたい - なつねこメモ](https://tech.natsuneko.blog/entry/2023/07/21/install-tailscale-on-alpine-linux)を参考にしました)

以上


## Arch Linux

rootになって

`pacman -S tailscale`

`systemctl enable tailscaled.service`

`systemctl start tailscaled.service`

( `systemctl enable --now tailscaled.service` ) で一括っぽい

`tailscale up`

あとはAlpineと同じです

以上


## 総括

Tailscaleって、Cloudflareと同じく慈善事業の類ではないでしょうか?
