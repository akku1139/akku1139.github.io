---
title: ASUS B85M-EでCPU換装したら起動しなくなったときに読む記事
date: 2025-06-15
tags: ["PC"]
---

## 結論

グラボ抜いて起動しよう

HoloCure、良ゲーなので皆さん遊びましょう。

## 本文

サブPCを今後メインに格上げすべく、メインのCPUとメモリを移植しました。

新構成(差分のみ)は

メイン

```yaml
CPU: Core i3-4170
MEM: DDR3-1600 4GB x2
```

サブ

```yaml
CPU: Core i7-4770S
MEM: DDR3-1600 8GB x4
```

使ってみて、メモリ8GBじゃちょっときついです。

(XMRig落とせば良いのですが)、アイドル状態で4GBくらい食ってるので、多くのファイルがキャッシュから落ちてSSDに読みに行くようになります。

CPU、メモリ交換後のメイン機は普通に起動したのですが(CPUソケットに木屑みたいなのが落ちてるので怖い)、サブ機は上手く起動しませんでした。

全く起動しないというわけではなく、起動 -> HDDを数秒読む -> アイドルになる と言った感じです。

HDDを読む以外は動かなかったB85M-Gと同じように思えて怖かったです。

CPUの載せ直し、CMOSクリア等試したのですが効果なし。

F2でBIOSメニューを開きF8でブートメニューでEnterでOSが起動するはずでしたが変化なし。

最終的にはグラボを抜くことで上手く起動しました。

画面がCPUより古いものを使っているせいで画面にはD-Sub入力しか無い、でもグラボにはHDMIとDisplayPort出力しか無い、という状況だったためBIOS設定でiGPUをプライマリに設定していました。

しかしこれがおそらく問題で、(少なくともCMOSクリア後は) dGPUからBIOS映像が出ていたため画面には何も表示されず、壊れていたように見えたのでした。

では、BIOSメニューを開く操作がなぜ失敗したかというと、このマザーボードでは「初回セットアップ」でのBIOSメニューを開くためのキーがF1に設定されていたためでした。

CMOSクリア前にiGPUから出なかったのは謎ですね。BIOSのバグも疑っていますが、こんなことをするのはおそらく私くらいですし、
初回起動時だけであること、BIOSいじるならリバースエンジニアリングから始まることを考えたらこれを直すのは割に合わないですね。

ReBarUEFIをやりたいのでもしかするとBIOS書き換えコースはあり得るかもしれません。

## おまけ

i7、リテールクーラーじゃ無理っぽいです。

日本の夏は厳しい。室温30度くらいでも高負荷かけると90度行きますし(メインのクーラーだと80度行かない)、何よりうるさい。

Core 2 Duo E6300のTDPが同じく65Wで、リテールクーラーがi7よりゴツそうだったので移植したら冷えそうだなと思って試みましたが、
LGA775とLGA1150のクーラーに互換性は無いとの事。一部クーラーはLGA775もLGA115Xも対応しているのでちょっとした企業努力がありそうですね。

ということで、次の買い物はCPUクーラーとスピーカー、ディスプレイになりそうです。

1ヶ月でハードオフへの支払額が3万円超えそうで本格的に怖い。

## おまけのおまけ

Meltdown、Specter怖い

## おまけのおまけのおまけ

セキュアブートの設定オフにしないと起動しないのをそろそろ直したいけど、Ventoyも使うのでまあ良いかって感じ。

BIOS設定項目沢山なのでよくわからん。

## さらなるおまけ

HDDをMBRからGPTに変換したら起動しなかった。

ライブisoから起動して、

```sh
sudo pacman -Rss grub
sudo pacman -S grub
```

で治った。結局systemd-bootにした。

カーネルをStableからLTSに落とした。この人Stableカーネルから逃げてる。

Plymouth設定してるのにスプラッシュスクリーン出ないの謎。
