# [ConeGeometry](https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry)

コーン形状を生成するためのクラス．

## 実装例

```js
const geometry = new THREE.ConeGeometry(5, 20, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);
```

## コンストラクタ

```js
ConeGeometry(
  (radius: Float),
  (height: Float),
  (radialSegments: Integer),
  (heightSegments: Integer),
  (openEnded: Boolean),
  (thetaStart: Float),
  (thetaLength: Float)
);
```

### `radius`

円錐台の底面の半径．デフォルトは 1 。

### `height`

円錐台の高さ．デフォルトは 1 ．

### `radialSegments`

円錐の円周上にある分割された面の数．デフォルトは 8 ．

### `heightSegments`

円錐の高さに沿った面の列の数．デフォルトは 1 ．

### `openEnded`

円錐の底面が開いているか，またはキャップされているかを示すブール値．デフォルトは `false` で，これはキャップされていることを意味する．

### `thetaStart`

最初のセグメントの開始角度．デフォルトは 0 (3 時の位置).

### `thetaLength`

円形セクターの中心角（しばしば θ と呼ばれる）．デフォルトは 2\*Pi で，完全な円錐形になる．

## プロパティ

プロパティは CylinderGeometry に基づく．

## メソッド

メソッドは CylinderGeometry に基づく．
