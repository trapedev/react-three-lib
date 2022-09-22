# LineBasicMaterial

ワイヤーフレーム風の形状を描画するための素材．

## 実装例

```js
const material = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1,
  linecap: "round", //ignored by WebGLRenderer
  linejoin: "round", //ignored by WebGLRenderer
});
```

## コンストラクタ

```js
LineBasicMaterial((parameters: Object));
```

### `parameters`

マテリアルの外観を定義する単数或いは複数のプロパティを持つオブジェクト．マテリアルの任意のプロパティ (マテリアルから継承されたプロパティも含む) をここで渡すことができる．パラメータの指定は任意．

例外は`color`プロパティで，これは 16 進文字列で渡すことができ，デフォルトでは 0xffff（白）．Color.set( `color` ) が内部的に呼び出される．

## プロパティ

共通のプロパティについては，ベースとなる Material クラスを参照．

| プロパティ名 | 型      | 説明                                                                                                                                                                                  |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `color`      | Color   | マテリアルの色．デフォルトでは白（0xffff）に設定されている．                                                                                                                          |
| `fog`        | Boolean | マテリアルが霧の影響を受けるかどうか．デフォルトは`true`．                                                                                                                            |
| `linewidth`  | Float   | 線の太さを制御する．デフォルトは`1`．OpenGL Core Profile と WebGL レンダラーの制約により，ほとんどのプラットフォームで `linewidth` は設定値に関係なく常に 1 になる．                  |
| `linecap`    | String  | 線端の外観を定義する．使用可能な値は`butt`，`round`，`square`．デフォルトは`round`．これは 2D Canvas の lineCap プロパティに対応し，WebGL レンダラでは無視される．                    |
| `linejoin`   | String  | ラインジョイントの外観を定義する．使用可能な値は`round`，`bevel`，`miter`である．デフォルトは`round`．これは 2D Canvas の lineJoin プロパティに対応し，WebGL レンダラでは無視される． |

## メソッド

共通のメソッドについては，ベースとなる Material クラスを参照．
