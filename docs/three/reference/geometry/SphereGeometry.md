# [SphereGeometry](https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry)

球体形状を生成するためのクラス．

## 実装例

```js
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
```

## コンストラクタ

```js
SphereGeometry(
  (radius: Float),
  (widthSegments: Integer),
  (heightSegments: Integer),
  (phiStart: Float),
  (phiLength: Float),
  (thetaStart: Float),
  (thetaLength: Float)
);
```

### `radius`

球体の半径．デフォルトは 1 ．

### `widthSegments`

水平方向の分割数．最小値は 3 で，デフォルトは 32 ．

### `heightSegments`

垂直方向のセグメント数．最小値は 2 で，既定値は 16 ．

### `phiStart`

水平方向の開始角度を指定します．デフォルトは 0 ．

### `phiLength`

水平方向の掃引角度の大きさを指定する．デフォルトは Math.PI \* 2 ．

### `thetaStart`

垂直方向の開始角度を指定する．デフォルトは 0 ．

### `thetaLength`

垂直方向の掃引角度の大きさを指定します．デフォルトは Math.PI ．

ジオメトリは，Y 軸（水平掃引）と Z 軸（垂直掃引）の周りを掃引して頂点を計算することによって作成される．したがって，これらの頂点の計算を開始（または終了）するポイントを定義するために，phiStart，phiLength，thetaStart，thetaLength の異なる値を使用して不完全な球体（「球体スライス」に似ている）を作成することができる．

## プロパティ

共通のプロパティについては、ベースとなる BufferGeometry クラスを参照．

## メソッド

共通のメソッドについては、ベースとなる BufferGeometry クラスを参照．
