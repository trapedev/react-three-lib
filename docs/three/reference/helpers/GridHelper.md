# [GridHelper](https://threejs.org/docs/index.html#api/en/helpers/GridHelper)

GridHelper は，グリッドを定義するためのオブジェクトである．グリッドは 2 次元の線の配列である．

## 実装例

```js
const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);
```

## コンストラクタ

```js
GridHelper(
  (size: number),
  (divisions: Number),
  (colorCenterLine: Color),
  (colorGrid: Color)
);
```

### `size`

グリッドの大きさ．デフォルトは 10．

### `divisions`

グリッドの分割数. デフォルトは 10．

### `colorCenterLine`

中心線の色．Color，16 進数，CSS-Color の名前を指定することができる．デフォルトは 0x444444

### `colorGrid`

グリッドの線の色．これは Color，16 進数値，CSS-Color 名で指定する．デフォルトは 0x888888

サイズ `size` で，一辺が `divisions` に分割された新しい GridHelper を作成する．色は任意．
