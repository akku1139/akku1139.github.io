---
title: モバイルデバイス企業はBLUとroot化を許可しろ
date: 2024-11-11
tags:
  - スマホ
  - タブレット
---

最悪に近い終末の過ごし方をしました。akkuです。

私がスマホ、タブレットメーカーに求めるものは

1. 保証切れてもいいからBootloader Unlock手段を公式で用意しろ
2. root化を塞ぐな
3. GPLくらい守れ
4. サポート切ったデバイスのツリーは公開してほしい

です。

## BLU

ROM焼きたい時に必要です。

だって公式ROMは大概要らない機能山盛りで、すぐにアップデートがなくなります。

BLUを公式にサポートするメーカーの一覧はこちらです。

https://github.com/melontini/bootloader-unlock-wall-of-shame

## root化

スマホにはなぜあれだけ広告があるのでしょうか?

AdAwayを使うために必要です。

LSPosedにも必要です。

## GPL

LinuxカーネルはAndroidの中核的な部分で、GPLv2の元公開されています。

Android 11からはGeneric Kernel Image (GKI)が採用されましたが、それ以前のデバイスは各社がフォークしたカーネルを使用しています。

一部のメーカーはカーネルソースを公開しないためGPL違反です。

## サポート

ほとんどのデバイスのサポートは一瞬です。

2〜4年ほどでアップデートは終了します。 (最近は法律の改正などによって長くなる傾向があるようです)

しかしたったそれだけの期間でデバイスが壊れることは有りません。

そのため、自力でAOSP(又は派生)をビルドしデバイスを使い続けることが出来ますが、ほとんどのデバイスのソースコードは公開されないため難しいです。

Googleデバイスの場合、Blobでは有りますが[ベンダーツリー](https://developers.google.com/android/drivers)をダウンロードできます。

Sony Xperiaは[一部のデバイスについてソースコードが公開されており](https://developer.sony.com/open-source/aosp-on-xperia-open-devices)、
[GitHub](https://github.com/sonyxperiadev)で見ることが出来ます。

ソースコードは企業の財産でもあるので(私のようなOSS開発者にとってはわからない)公開するのは難しいかもしれませんが、
サポートを続ける気のないデバイスならユーザーがROMをビルドするために十分なツリーを公開してほしいものです。

## まとめ

流石に「新しいデバイスが売れなくなって困る」なんていう企業は有りませんね。

その囲い込みは他のオープンなメーカーへ逃げられるだけです。

ちなみに私は[Lenovo Yoga Tablet 10 Wi-Fi版 (2013年発売)](https://www.gsmarena.com/lenovo_yoga_tablet_10-5836.php)向けのROM開発をしています。

完成の目処が立ったら報告するのでご確認ください。

また、この `Lenovo Yoga Tablet 10` か `Lenovo Yoga Tablet 8` を
持っている方、情報を知っている方、ROM開発をしていた方などいらっしゃいましたら
[お問い合わせ](/contact/)か[SNS](https://akku1139.github.io/about/#accounts)にお願いします。

以上。
