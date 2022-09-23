# [Line](https://threejs.org/docs/index.html#api/en/objects/Line)

連続した線．

これは `LineSegments` とほぼ同じである．唯一の違いは，gl.LINES の代わりに gl.LINE_STRIP を使用してレンダリングされる点．

## 実装例

```js
const material = new THREE.LineBasicMaterial({
  color: 0x0000ff,
});

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);
```

## コンストラクタ

```js
Line((geometry: BufferGeometry), (material: Material));
```

### `geometry`

線分を表す頂点．デフォルトは新しい BufferGeometry．

### `material`

線分を表すマテリアル．デフォルトは新しい LineBasicMaterial．

## プロパティ

共通プロパティについては、ベースとなる Object3D クラスを参照．

| プロパティ名          | 型             | 説明                                                                                                                                        |
| :-------------------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| geometry              | BufferGeometry | バッファージオメトリ．線分を表す頂点．                                                                                                      |
| isLine                | Boolean        | 与えられたオブジェクトが Line タイプであるかどうかをチェックするための読み取り専用のフラグ．                                                |
| material              | Material       | 線のマテリアル．                                                                                                                            |
| morphTargetInfluences | Array          | モーフの適用量を指定する．通常は 0 ～ 1 の重みの配列．デフォルトでは未定義だが， .updateMorphTargets() によって空白の配列にリセットされる． |
| morphTargetDictionary | Object         | morphTarget.name プロパティに基づく，morphTargets の辞書．デフォルトでは未定義だが，.updateMorphTargets() で再構築される．                  |

## メソッド

共通メソッドについては、ベースとなる Object3D クラスを参照．

| メソッド名            | 引数                                          | 説明                                                                                                                                            |
| :-------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| .computeLineDistances | なし                                          | LineDashedMaterial に必要な距離の値の配列を計算する．ジオメトリの各頂点について，このメソッドは現在の点から線の一番始めまでの累積長を計算する． |
| .raycast              | `raycaster` : Raycaster, `intersects` : Array | キャストされた Ray とこの Line の間の交差を取得する．Raycaster.intersectObject がこのメソッドを呼び出す．                                       |
| .clone                | なし                                          | この Line オブジェクトとその子孫のクローンを返す．                                                                                              |
| .updateMorphTargets   | なし                                          | オブジェクトに影響を与えないように morphTargets を更新する．.morphTargetInfluences と .morphTargetDictionary プロパティをリセットする．         |
