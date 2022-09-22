# CapsuleGeometry

CapsuleGeometry は，与えられた半径と高さを持つカプセルのジオメトリクラスである．旋盤を使用して製作されている．

## 実装例

```js
const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const capsule = new THREE.Mesh(geometry, material);
scene.add(capsule);
```

## コンストラクタ

```
CapsuleGeometry(radius : Float, length : Float, capSubdivisions : Integer, radialSegments : Integer)
```

### `radius`

カプセルの半径．設定は任意でデフォルトは 1．

### `length`

中央の部分の長さ．設定は任意でデフォルトは 1．

### `capSegments`

カプセルを作るために使用されるカーブセグメントの数．設定は任意でデフォルトは 4．

### `radialSegments`

カプセルの円周上にあるセグメント面の数．設定は任意でデフォルトは 8．

## プロパティ

プロパティは BufferGeometry に基づく．

## メソッド

メソッドは BufferGeometry に基づく．
