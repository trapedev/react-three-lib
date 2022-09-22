# [CircleGeometry](https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry)

CircleGeometry はユークリッド幾何学の単純な図形である．中心点を中心に，指定された半径の範囲内で広がるいくつかの三角形のセグメントから構成される．これは，開始角と与えられた中心角から反時計回りに作られる．また，セグメントの数によって辺の数が決まる正多角形も作ることができる．

## 実装例

```js
const geometry = new THREE.CircleGeometry(5, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);
```

## コンストラクタ

```js
CircleGeometry(
  (radius: Float),
  (segments: Integer),
  (thetaStart: Float),
  (thetaLength: Float)
);
```

### `radius`

円の半径，デフォルトは 1．

### `segments`

セグメント（三角形）の数．最小値は 3 でデフォルトは 8．

### `thetaStart`

最初のセグメントの開始角度．デフォルトは 0（3 時の位置）．

### `thetaLength`

円形セクターの中心角（しばしば θ と呼ばれる）．デフォルトは 2 × Pi で，完全な円形になる．

## プロパティ

プロパティは BufferGeometry に基づく．

## メソッド

メソッドは BufferGeometry に基づく．
