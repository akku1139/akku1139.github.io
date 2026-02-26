---
title: Helio G99のタブレットの一部にKeenaduが入ってたけどそのYahooニュースのコメント欄が面白い
date: 2026-02-26
tags: ["Keenadu", "Yahooニュース"]
---

## 事実について

KasperskyがKeenaduっていうマルウェアを見つけた。

公式ROMに組み込まれてて、Zygote (`libandroid_runtime.so` 経由で)を乗っ取って特権を得て動く場合もあるっぽい。

広告を勝手に踏んだり、ECアプリから情報を発信したりするみたい。

[Kaspersky discovers Keenadu – a multifaceted Android malware that can come preinstalled on new devices](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-keenadu-a-multifaceted-android-malware-that-can-come-preinstalled-on-new-devices)

[おそらく開発者環境が侵害されていて、正規署名されてAndroidファームウェアレベルで存在するバックドア「Keenadu」](https://www.sdsg.moe/entry/2026/02/20/135709)

ALLDOCUBEは公式に調査することを宣言しています。

https://x.com/AlldocubeJapan/status/2026626952736682199
https://x.com/alldocube/status/2026612712365764903

### おそらく感染しているデバイス

- ALLDOCUBE iPlay 50 mini Pro
- ALLDOCUBE iPlay 60 mini Pro (Android 14?)
- ALLDOCUBE iPlay 50 mini Pro NFE (Android 13)
- ALLDOCUBE iPlay 60 Pro
- ALLDOCUBE iPlay 70 Pro
- DOOGEE T30 Pro
- AvidPad A90
- Hitabt G30A
- Hitabt P30A
- TECLAST T60 Plus
- ALPHAWOLF APad2

### おそらく感染していないデバイス

- ALLDOCUBE iPlay 50 mini NFE
- ALLDOCUBE iPlay 60 mini Pro (Android 15)
- ALLDOCUBE iPlay 60 mini Turbo
- ALLDOCUBE iPlay 70 Max Pro
- ALLDOCUBE iPlay 70E
- ALLDOCUBE Ultra Pad
- HEADWOLF FPad5
- HEADWOLF FPad7
- HEADWOLF F6E
- HEADWOLF HPad6
- AvidPad A90SL
- TECLAST P50
- BNCF BPad T1
- Bigme b7
- Xiaomi REDMI Note 13 Pro+ 5G
- Xiaomi 14T Pro
- Nothing Phone 3a Lite
- ZTE REDMAGIC 11 Pro
- BekoQurd M8

### ソース

https://x.com/shabasuke/status/2026769629285425460
https://x.com/retsu_zone/status/2026050723990196525
https://x.com/kaz3ypo/status/2026635996696355230
https://x.com/YoZki_VR/status/2026869280722268691
https://x.com/rasenkan/status/2026955486395002988
https://x.com/E51M1wFjOR0Z5ju/status/2026652714420285529
https://x.com/kaz3ypo/status/2026635996696355230
https://x.com/nikuneko/status/2026969394904170782
https://x.com/sawadaissei/status/2026680592021291071
https://x.com/GadgetMitchy/status/2026943889287102772
https://x.com/iwasi66/status/2026879360876294601
https://x.com/koboze/status/2026887952866140407
https://x.com/GaruJpn/status/2026900207632527406
https://x.com/looser_98/status/2026983408132649019
https://x.com/tobiki/status/2026972285748535311
https://x.com/ruka_kage/status/2026942840509710734
https://x.com/sanae_hirotaka/status/2026987024050438573
https://x.com/misago_net/status/2026970732530716721
https://x.com/kazuaki_77/status/2026988503868035173
https://x.com/misago_net/status/2026991607611068482
https://x.com/hon_ysn/status/2026997468966326658
https://x.com/tide_watcher/status/2026995674609561607
https://x.com/notinoti_gadg/status/2026990092968206387
https://x.com/wat4ru/status/2026980311037575295
https://x.com/bamiria/status/2026932953486602365
https://x.com/miniPCfunnel/status/2026925435158933579
https://x.com/wtnbgo/status/2026873880946815079
https://x.com/mysalt_orenos/status/2026693593356972468
https://x.com/boujinfuku/status/2026677387946283164

感染してるやつが全部同じところのOEMだったら(ry

## 本題

この件についてアスキーが取り上げたやつのYahooニュースのコメント欄が面白い

面白いコメントだけ取り上げます (とか言いつつほぼ全部になった)

ソース [Androidタブレットにマルウェア“Keenadu”混入　Alldocubeが緊急調査 (コメント20件)](https://news.yahoo.co.jp/articles/99c1b01a7317d48d25b23e47364049b5b7d43987/comments) ([元記事](https://ascii.jp/elem/000/004/376/4376739/))

<hr />

> 心臓部にマルウェアが書き込まれてるから、初期化しても消えないのがタチ悪い

これはマジでそう

<hr />

> 専制主義国の自作自演。
> 中華タブを買った奴の自己責任。
> 　もともと中国人には中国共産党に対してのプライバシーは存在しないので影響なしだろうが、非中国人のとっては薄々感じていたリスクが顕在化しただけ。

国単位でこんな小銭稼ぎみたいなことするか?

<hr />

> 葉を隠すなら森の中といいますよね
> 駆除したマルウェア以外の本命が隠れているかも

有り得なくはないけど、Kasperskyはちゃんと調査してると思う。

<hr />

> 中国OS、Android

Androidの開発元はGoogleです。
Googleがどこの企業かご存知無いでしょうか?
また、身の回りにある多くの製品は中国(中華人民共和国)製です。
[そういえば反中の方がDJIのマイク使ってたみたいですね](https://x.com/kuniyoshi_shino/status/2012426470996738157)。

<hr />

> これ氷山の一角で、今となっては国内メーカーのPCも中国製造だったりするから安心できませんね。

BIOSに感染してるウイルスが前あったはずだから、中国関係なく怖い点。
製造が中国以外でも感染するときはする。

<hr />

> もうね、製造過程でファームウェアに仕込まれてるってことは、最初から悪意があったってことですね。

ALLDOCUBE以外のメーカーにも報告があるうえ、長年積み重ねてきた信頼を小銭稼ぎで失うのか?

<hr />

> 内蔵ストレージ容量偽装の話題もあったなぁ…
> 補償も対応もないだろうし無名な中華タブは安価でも避けるに限る

容量偽装の件はおそらく「[容量偽装？Blackview系列のTABWEEタブレットでストレージ128GBなのに64GB以上使えない](https://garumax.com/tabwee-products-may-be-falsifying-their-storage-capacity)」ですね。
~~タブレットとか壊すこと無いからBLUしてpostmarketOS焼きたい~~。
ところで私はBlackview Tab 15 Proを1万2000円くらいで買ったのでそのうち記事出します。

<hr />

> 中国製品は管理が甘いのか、それとも最初からこういう設計なのか
> どちらにせよ、業務用で使うのはよろしくない

管理が甘い面は確実にある。
もちろんちゃんとしてるとこは他の国と同程度、もしくはそれ以上に品質管理してるはず。

<hr />

> 中国国内向けの混入ではない可能性が高い。
> 「言語が中国語方言に設定され、タイムゾーンが中国のものである場合、マルウェアは動作を停止」との情報がありますので。

多分メーカー内のテストで検出されないようにするためだと思う。
中国国内の顧客をターゲットから捨てたとしても日本とか他の国に十分ターゲットがいるのでマルウェア開発側としてはそこまでの問題ではない。

<hr />

> 中華通販サイト(ショップ)によってグローバル版OSで上書きして販売されるケースもあります。原因はそれかもしれません

ブートローダーに署名チェックがあるので他のROM焼いても起動しない。
起動するとしてもOrange Stateになるので確実にわかる。
Amazonの公式ストアから購入しても感染してた報告があるのでROM焼きで感染した可能性は切り捨てていいと思う。
署名バイパスとか見つかったらマルウェアどころの話じゃなくて世界中のセキュリティが終わるのでそれだけは無しでお願いします。
これはOTAサーバーを侵害しても署名できないので無意味。
(署名鍵漏れてたら終わり)

<hr />

> この件はファーム開発の管理が杜撰なのが原因なのかな？
> 声を挙げることでメーカー重い腰を上げたのはまあ良い傾向かと。

> Amazonで格安タブレットとして売られている製品群ですよね。
> コスパがいいことが特徴ですが、案の定セキュリティ上の懸念が現実になったという形でしょうか。
> しかし、指摘されても調査すらしないよりかは調査して対応するということなので、中国メーカーにしてはまだ良心的なのかもしれませんね。
> (改善をアピールするための中ロによる自作自演という邪推もできなくはないところが心配ではありますが)
> いずれにしろ、こういう格安タブレットは趣味用に割り切って、重要な情報からは切り離すことが予防的な対策として有効なのではないでしょうか。

中華メーカーはマイナーアップデートすら配信しないところがあるので...。
(とか言いつつスマホの日本版も独自アプリ、仕様多すぎてアプデ延期したみたいなのもよくある)

<hr />

> MediaTekの開発環境が汚染されていたようで声明が出てました。特定のSoC搭載モデルはほぼアウトで影響受けた機種がどんどん確認されてるようです。国内メーカー製であってもアウト。

ここまで大規模に感染するなら

- モバイルメーカーをターゲットにした攻撃 (さすがにそれでこの量のデバイスが感染するのは無い)
- OEMにウイルスが入った
- MediaTekがやられた

のどれかだと思うので、MediaTekがやられた可能性はある。
MediaTekがやられた場合はHelio G99以外にも感染拡大してる可能性があるので怖いところ。

<hr />

> ファームウェアに組み込まれているという事は、メーカー内で悪意を持っている人が混入させたか、開発環境に外部から不正アクセスでもあったのか
> しかし、中華メーカータブレットのマルウェアをロシアメーカーのセキュリティ会社が発見するというのも、何か勘ぐってしまいそうになります

> しかもこれ現状ではカスペルスキーでしか検出できないとのことで尚更…ね

Dr.Web Lightでも検知できるっぽい。
知ってる限りKasperskyは悪意のあるベンダーではないので裏の繋がりは無さそう。

[Notepad++のアップデート機構が国家も関与する攻撃者によって侵害された件](https://x.com/yousukezan/status/2018248964521476126)があるので、こういうのが怖い。

<hr />

以上。
