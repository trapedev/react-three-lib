# [Mesh](https://threejs.org/docs/index.html#api/en/objects/Mesh)

三角ポリゴンメッシュベースのオブジェクトを表すクラス．SkinnedMesh などの他のクラスのベースとしても機能する．

## 実装例

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

## コンストラクタ

```js
Mesh((geometry: BufferGeometry), (material: Material));
```

### `geometry`

BufferGeometry のインスタンス．デフォルトでは，新しい BufferGeometry が作成される．設定は任意．

### `material`

材料の単一または配列．デフォルトは，新しい MeshBasicMaterial．設定は任意．

## プロパティ

共通のプロパティについては、ベースとなる Object3D クラスを参照．

| プロパティ名          | 型             | 説明                                                                                                                                            |
| :-------------------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| geometry              | BufferGeometry | BufferGeometry（またはその派生クラス）のインスタンスで，オブジェクトの構造を定義．                                                              |
| isMesh                | Boolean        | 与えられたオブジェクトが Mesh 型であるかどうかをチェックするための読み取り専用フラグ．                                                          |
| material              | Material       | オブジェクトの外観を定義する，Material 基底クラスから派生したマテリアルのインスタンス，またはマテリアルの配列．デフォルトは MeshBasicMaterial． |
| morphTargetInfluences | Array          | 0 から 1 までの重みの配列で，モーフを適用する量を指定する．デフォルトでは未定義だが， updateMorphTargets によって空白の配列にリセットされる．   |
| morphTargetDictionary | Object         | morphTarget.name プロパティに基づいた morphTarget の辞書です．デフォルトでは未定義だが，updateMorphTargets を再構築する．                       |

## メソッド

共通のメソッドについては、ベースとなる Object3D クラスを参照．

| メソッド名          | 引数                                          | 説明                                                                                                                                       |
| :------------------ | :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| .clone              | なし                                          | この Mesh オブジェクトとその子孫のクローンを返しす．                                                                                       |
| .raycast            | `raycaster` : Raycaster, `intersects` : Array | キャストされた ray とこのメッシュの間の交差を取得する．Raycaster.intersectObject はこのメソッドを呼び出すが，結果は順番通りではない．      |
| .updateMorphTargets | なし                                          | morphTargets を更新して，オブジェクトに影響を与えないようにする．morphTargetInfluences と morphTargetDictionary プロパティをリセットする． |
