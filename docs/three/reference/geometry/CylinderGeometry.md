# CylinderGeometry

円柱形状を生成するためのクラス．

## 実装例

```js
const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);
```

## コンストラクタ

```js
CylinderGeometry(
  (radiusTop: Float),
  (radiusBottom: Float),
  (height: Float),
  (radialSegments: Integer),
  (heightSegments: Integer),
  (openEnded: Boolean),
  (thetaStart: Float),
  (thetaLength: Float)
);
```

### `radiusTop`

上部にあるシリンダの半径．デフォルトは 1 ．

### `radiusBottom`

シリンダーの底面の半径．デフォルトは 1 ．

### `height`

シリンダーの高さ．デフォルトは 1 ．

### `radialSegments`

円柱の円周上にある分割された面の数．デフォルトは 8 ．

### `heightSegments`

円柱の高さに沿った面の列数．デフォルトは 1 ．

### `openEnded`

円柱の両端が開いているか，またはキャップされているかを示すブール値．デフォルトは false で，これはキャップされていることを意味する．

### `thetaStart`

1 番目のセグメントの開始角度．デフォルトは 0（3 時の位置）．

### `thetaLength`

円形セクターの中心角（しばしば θ と呼ばれる）．デフォルトは 2\*Pi で，これは完全な円柱になる．

## プロパティ

プロパティは BufferGeometry に基づく．

## メソッド

メソッドは BufferGeometry に基づく．
