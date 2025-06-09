---
title: Tailscaleが便利過ぎる件について
date: 2025-06-09
tags: ["PC", "ネットワーク"]
---

自宅以外からも、新しい(?)PCを使いたい用途があるので、VPNを設定することにしました。

その際にTailscaleを使ったらとても簡単だったので、紹介記事です。

(この記事はプロモーションを含みません)

TailscaleはWireGuardベースのVPNサービスです。

無料枠がデカすぎます!

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

([Alpine Linux に Tailscale を入れたい - なつねこメモ](https://tech.natsuneko.blog/entry/2023/07/21/install-tailscale-on-alpine-linux)を参考にしました)

以上


## Arch Linux

追記予定

## 総括

Tailscaleって、Cloudflareと同じく慈善事業の類ではないでしょうか?
