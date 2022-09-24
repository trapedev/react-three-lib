# [LineSegments](https://threejs.org/docs/index.html#api/en/objects/LineSegments)

頂点のペアの間に描かれた一連の線．

これは，Line とほぼ同じ．唯一の違いは，gl.LINE_STRIP の代わりに gl.LINES を使ってレンダリングされる点．

## コンストラクタ

```js
LineSegments((geometry: BufferGeometry), (material: Material));
```

### `geometry`

各線分を表す頂点のペア．

### `material`

線分を表すマテリアル．デフォルトは LineBasicMaterial ．

## プロパティ

共通のプロパティについては，ベースとなる Line クラスを参照．

| プロパティ名    | 型      | 説明                                                                                       |
| :-------------- | :------ | :----------------------------------------------------------------------------------------- |
| .isLineSegments | Boolean | 与えられたオブジェクトが LineSegments 型であるかどうかを確認するための読み取り専用フラグ． |

## メソッド

共通のメソッドについては，ベースとなる Line クラスを参照．
