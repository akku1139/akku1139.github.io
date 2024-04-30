---
title: "メインPCのCPUとメモリ交換の検討"
date: 2024-04-30
---

私のメインPCは Dell Inspiron 3647 (メモリ、ストレージ換装済み)です。

これは父がかなり前に買って、そこからずっと使っているものですが、特に問題も発生していません。

オリジナル構成は

```yaml
CPU: Core i3-4170 3.70GHz
GPU: Intel HD Graphics 4400 (内蔵)
メモリ: 4GB (4GB *1) DDR3
ストレージ: HDD 1TB
電源: 220W
```

といったもので、現在の構成は

```yaml
メモリ: 8GB (4GB *2) DDR3
ストレージ: SSD 1TB
```

となっています。

最近ハードオフに行ったとき、Core i5-4670 が2000円で売っているのを見つけたので換装すればお得だと思いました。

また、これを機にメモリも増やせればいいなと思いました。

もし良いWi-Fiカードを見つけられれば5GHzの無線LANにも対応したいです。

Intel 4世代(Haswell)と5世代(Broadwell)ではLGA1155とソケットに互換性がありますが、

[仕様書](https://dl.dell.com/manuals/all-products/esuprt_desktop/esuprt_inspiron_desktop/inspiron-3647-small-desktop_reference%20guide_ja-jp.pdf)によるとこのPCのチップセットは Intel H81 PCH で
5世代CPUのためには Intel 9 シリーズのチップセットが必要となり、残念ながら対応できません。

```yaml
CPU: Core i5-4670 
GPU: Intel HD Graphics 4600 (内蔵)
メモリ: 816GB (8GB *2) DDR3
```

最終的に上記の構成を目指しています。

8GBのメモリを見つけるのは大変ですからメモリは変わらないかもしれません。

進展があれば次の記事を書きます。

以上。
