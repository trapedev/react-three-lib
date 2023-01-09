# [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)

クォータニオンの実装です。
Quaternion は three.js で回転を表現するために使用されます。

Quaternion インスタンスを繰り返し処理すると、その成分（x, y, z, w）が対応する順番で得られます。

## 実装例

```js
const quaternion = new THREE.Quaternion();
quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);

const vector = new THREE.Vector3(1, 0, 0);
vector.applyQuaternion(quaternion);
```

## コンストラクタ

```js
Quaternion((x: Float), (y: Float), (z: Float), (w: Float));
```

x - x coordinate
y - y coordinate
z - z coordinate
w - w coordinate

## プロパティ

| プロパティ名 | 型  | 説明 |
| :----------- | :-- | ---- |
|              |     |      |

## メソッド

| メソッド名 | 引数 | 説明 |
| :--------- | :--- | :--- |
|            |      |      |
