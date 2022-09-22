# [BoxGeometry](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)

BoxGeometry は，与えられた `width`，`height`，`depth`を持つ直方体のためのジオメトリクラス．作成時，立方体は原点を中心とし，各辺は軸のいずれかに平行である．

## 実装例

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

## コンストラクタ

```js
BoxGeometry(
  (width: Float),
  (height: Float),
  (depth: Float),
  (widthSegments: Integer),
  (heightSegments: Integer),
  (depthSegments: Integer)
);
```

### `width`

幅．つまり，X 軸に平行な辺の長さ．設定は任意で，デフォルトは 1．

### `height`

高さ． つまり，Y 軸に平行な辺の長さ．設定は任意で，デフォルトは 1．

### `depth`

深さ．つまり，Z 軸に平行なエッジの長さ．設定は任意で，デフォルトは 1．

### `widthSegments`

辺の幅に沿った，分割された長方形の面の数．設定は任意で，デフォルトは 1．

### `heightSegments`

辺の高さに沿った，分割された長方形の面の数．設定は任意で，デフォルトは 1．

### `depthSegments`

側面の奥行きに沿った，分割された長方形の面の数．設定は任意で，デフォルトは 1．
