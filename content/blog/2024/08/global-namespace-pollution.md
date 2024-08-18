---
title: グローバル名前空間を汚染しないでください
date: 2024-08-18
---

いくつかのプログラミング言語は危険な名前空間管理を行います。

まずはRubyとGoを紹介しましょう。

それぞれの言語の外部ファイル読み込み方法を見てみましょう。

Rubyでは
```ruby
# mod1.rb を取り込む
require './mod1.rb'
## or
require "./mod1"

# loadでも似たようなことができる
load './mod2.rb'

# 標準ライブラリのrequire
require "json"
json_str = '{"name": "Ruby", "age": 30}'
JSON.parse(json_str) # => {"name"=>"Ruby", "age"=>30}
```

Goでは (ほとんど知らないので一般的なHelloWorldを出します)
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello World!")
}
```

この読み込み方法は危険であると言えます。 何故でしょうか?

例えば次のようなRubyコードを考えてみてください。

```ruby {name="main.rb"}
# main.rb
def hello
    p "hi"
end

hello

p "---load mod1---"
require "./mod1.rb"

hello
```

```ruby {name="mod1.rb"}
# mod1.rb
def hello
    p "ya"
end
```

```
$ ruby main.rb
"hi"
"---load mod1---"
"ya"
```

わかりましたね。

読み込んだファイルによってクラス `Hi` が置き換えられてしまいました。

この問題はクラスやグローバル変数でも発生します。

自分で全てを記憶できると言うなら別ですが、ほとんどの人はそうでは有りませんし、
他の人が開発しているモジュールの場合は自分の知らないところで変更される恐れが有ります。

ではどうすればいいでしょうか?

それはJavaScript(ES Modules)を見れば理解できます。

```js {name="index.mjs"}
// index.mjs
import hello, { hi } from "./mod1.mjs"
hello()
hi()
```

```js {name="mod1.mjs"}
// mod1.mjs
export const hi = () => {
  console.log("hi!")
}

const hello = () => {
  console.log("hello world")
}
export default hello
```

どのような名前が増えるかは明白です。

(`<script>` タグにはこのような安全性のかけらも有りませんが...)

PythonやJava、C#も同じように増える名前をプログラマーが管理できます。

Cは古い言語なのでフラットになるのは仕方ないことですが比較的新しい言語は名前空間が汚染されないようにしてほしいです。

以上。
