---
title: 【Monero】おすすめのマイニングプールは?
summary: Moneroのマイニングプールの紹介
date: 2024-10-23
tags:
  - Monero
  - 仮想通貨
  - マイニング
---

皆さんはMoneroを使っているでしょうか?

私はMoneroが大好きです。

その理由に安全性や匿名性が挙げられますが、別の理由としてCPUマイニングをサポートしているということが有ります。

MoneroはASIC(専用ハードウェア)耐性を掲げており、最初に採用していたPoWアルゴリズムのCryptoNightは6ヶ月毎の定期的なforkによりASIC耐性を維持してきました。

しばらくして[定期的なforkへの批判](https://github.com/monero-project/monero/issues/3387)を元に[Arweaveの開発者と共に](https://nextmoney.jp/?p=18450)、RandomXが開発されました。

その後、2919年11月(ブロック高1978433)からはRandomXを採用し、現在に至ります。

RandomXというアルゴリズムは、CPUととても相性がいいです! (GPUでも掘れるけどCPUの方が効率が良い)

このアルゴリズムに関する詳細な説明は [ASIC耐性を持つProgPoW RandomX設計の翻訳 - Qiita @asfdrwe](https://qiita.com/asfdrwe/items/5441bf399ce3e280c6c4) に譲りますが、

簡単に説明すると、「RandomX向けのASICは非常に高速なCPUと同義である」ということです。

[こちらのサイト](https://www.bitcoininsider.org/article/80153/how-mine-monero-randomx-cpu-gpu)と
そのソース([OpenCL実装](https://github.com/SChernykh/RandomX_OpenCL) [CUDA実装](https://github.com/SChernykh/RandomX_CUDA)、
[XMRigベンチマーク](https://xmrig.com/benchmark)によると、

RandomXのGPUマイナーはCPUマイナーに比べてハッシュレートが大幅に劣ること(最適化の具合もある)がよくわかります。

私が使用してるCPU `Core i7-4770S` において、CryptoNightRのハッシュレートが 251 H/s で RandomXは 2352 H/s を得ることが出来るのに対し、
多くのGPUはハッシュレートがほとんど向上していない、または大幅に減少していることがわかります。

また、[ASICマイナーが発売されたような噂](https://www.reddit.com/r/MoneroMining/comments/162ud4p/randomx_asic_announced/)が有りますが、
内部的にRISC-V CPUを沢山設置しているだけのようです。

前のようにGPU実装があったり、[FPGA実装](https://github.com/MainSilent/RandomX-FPGA)があったりするにもかかわらず
RandomX採用から5年程度経って未だにCPUマイニングが主流ということは、CPU向けコインと言って問題ないでしょう。


## 本題

ブロックチェーンマイニングの理想は全員がソロマイニングをすることですが、
[2.86 GH/s の圧倒的なネットワークハッシュレート (2024/10/23 時点)](https://miningpoolstats.stream/monero)の前では
一人のマイナーが出せる 高々数 KH/s 程度のハッシュレートはひとえに風の前の塵に同じです。

そのため、多くのマイナーはマイニングプールを使用します。

私が好んで使っているプールがいくつかあるので紹介します。


### MoneroOcean

ホームページ: https://moneroocean.stream/

配分方式: PPLNS

最低出金額: 0.003 XMR

ハッシュレートランキング6位のプールです。

一番おすすめです。現在メインで使っています。

このプールは20種類を超える仮想通貨の中で「デバイスにとって最も収益性の高いコイン」を選んでくれる神機能が有ります。

(同じような機能をサポートするプールに [C3Pool](https://c3pool.com) (最低出金額 0.001 XMR) や [Skypool](https://skypool.org/) (最低出金額 0.01 XMR) も有りますが、最も多くの選択肢を持つのはMoneroOceanです)

その機能を使うためには[XMRigのMoneroOceanフォーク](https://github.com/MoneroOcean/xmrig)を使用する必要が有りますが、十分なリターンがあると思います。

ほとんどの場合はMoneroが選択されますが、RandomXのフルモードを実行するために必要な2GBのメモリを確保することが難しいデバイスでは他の選択肢が有ります。

今年の春頃はRandomXを採用するZephyrの収益性が対Moneroで9倍を超えたので激アツでした。(最終的に10倍に到達したかもしれません)


### P2Pool

ホームページ: https://p2pool.io/

配分方式: PPLNS

最低出金額: 0.0004 XMR

[Monero公式も推奨している](https://www.getmonero.org/get-started/mining/)分散型のマイニングプールです。

ソロマイニングとプールマイニングのメリットの両方を持つ唯一無二のプールだと思います。

ハッシュレートが大きいメインプールと、ハッシュレートが小さいけど小規模マイナーに優しい[ミニプール](https://p2pool.io/mini)が有ります。

セットアップがめんどくさいことと、フル構成で立てた場合にメモリを6GB消費するのはあまり良くないです。

前は使っていましたが、メモリの少ないデバイスでマイニングをする必要があることとZephyr圧倒的ブームの影響によって現在は使っていません。

需要があればセットアップガイドをだします。


### Kryptex

ホームページ: https://www.kryptex.com/en/

配分方式: PPS+

バックグラウンドでマイニングをして、対価を得るプールです。

支払いはBitcoin、USDT、Visaなどの選択肢が有ります。

[普通のマイニングプール](https://pool.kryptex.com/xmr) (最低出金額 0.01 XMR)も運営しているようです。


### SupportXMR

ホームページ: https://supportxmr.com/

配分方式: PPLNS

最低出金額: 0.1 XMR

Moneroを専門にしているプールで、ハッシュレートランキング2位です。1位のときも有ります。

大きいプールを積極的に使うと51%攻撃のリスクが高まるのでおすすめはしませんが、
Moneroの発展に多大な影響を与えているプールだと思います。


### Nanopool

ホームページ: https://xmr.nanopool.org/

配分方式: PPLNS

最低出金額: 0.11 XMR

この記事を書いているときにハッシュレートランキング1位のプールです。

SupportXMRと同じで積極的な推奨はしませんが、覚えておいて損はないと思います。


### HeroMiners

ホームページ: https://monero.herominers.com/

配分方式: PROP (ソロプールも有り)

最低出金額: 0.001 XMR

私が最初に使った~~けど別に思い出があるわけではない~~プールです。

ハッシュレートが比較的あるプールの中で最低出金額が低いのはメリットだと思います。


### HashVault.pro

ホームページ: https://monero.hashvault.pro/en/

配分方式: PPLNS (ソロプールも有り)

最低出金額: 0.001 XMR

HeroMinersよりハッシュレートが大きく、最低出金額が同じなのでこつちのほうが良いかもです。


## まとめ

MoneroOceanがおすすめ。

迷ったら[MiningPoolStats](https://miningpoolstats.stream/monero)を見てください。
