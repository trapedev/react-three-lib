# [LineDashedMaterial](https://threejs.org/docs/index.html#api/en/materials/LineDashedMaterial)

破線によるワイヤーフレーム風の形状を描画するためのマテリアル．

## 実装例

```js
const material = new THREE.LineDashedMaterial({
  color: 0xffffff,
  linewidth: 1,
  scale: 1,
  dashSize: 3,
  gapSize: 1,
});
```

## コンストラクタ

```js
LineDashedMaterial((parameters: Object));
```

`parameters`
マテリアルの外観を定義する 1 つまたは複数のプロパティを持つオブジェクト．マテリアルの任意のプロパティ (LineBasicMaterial から継承された任意のプロパティを含む) をここで渡すことができる．設定は任意．

## プロパティ

共通のプロパティについては，ベースとなる LineBasicMaterial クラスを参照．

| プロパティ名           | 型      | 説明                                                                                             |
| :--------------------- | :------ | :----------------------------------------------------------------------------------------------- |
| `dashSize`             | number  | ダッシュの大きさ．これはギャップとストロークの両方である．デフォルトは 3．                       |
| `gapSize`              | number  | ギャップの大きさを指定する．デフォルトは 1 ．                                                    |
| `isLineDashedMaterial` | Boolean | 与えられたオブジェクトが LineDashedMaterial 型であるかどうかを確認するための読み取り専用フラグ． |
| `scale`                | number  | 線の破線部分の縮尺を指定する．デフォルトは 1．                                                   |

## メソッド

共通のメソッドについては，ベースとなる LineBasicMaterial クラスを参照．
