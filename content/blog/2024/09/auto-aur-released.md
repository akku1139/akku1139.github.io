---
title: Auto-AUR登場
summary: タイトルはテクニカル諏訪子さんを真似しました
date: 2024-09-24
tags:
  - ArchLinux
  - Auto-AUR
---

## Auto-AURって何?

AURのビルド済みバージョンをホストするリポジトリです

サイト: https://auto-aur.pages.dev

## 使い方

rootでコマンドを実行

```sh
pacman-key --recv-key 3056513887B78AEB --keyserver keyserver.ubuntu.com
pacman-key --lsign-key 3056513887B78AEB
pacman-key --recv-key b465fd29d2ea44cc --keyserver keyserver.ubuntu.com
pacman-key --lsign-key b465fd29d2ea44cc

pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' \
'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst' \
'https://auto-aur.pages.dev/repo/auto-aur/x86_64/auto-aur-keyring-20240923-1-any.pkg.tar.zst' \
'https://auto-aur.pages.dev/repo/auto-aur/x86_64/auto-aur-mirrorlist-20240923-1-any.pkg.tar.zst'
```

`/etc/pacman.conf` に行を追加

```ini
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist

[auto-aur]
Include = /etc/pacman.d/auto-aur-mirrorlist
```

リポジトリを更新 (root)

```
pacman -Sy
```
か
```
pacman -Syu
```

インストール可能になったパッケージをご確認ください

```
pacman -Sl auto-aur
```

GPG鍵は `3056513887B78AEB` が Chaotic-AUR、
`b465fd29d2ea44cc` が Auto-AUR となります

## ソースコード

[GitHub](https://github.com/akku1139/auto-aur)

以上。
