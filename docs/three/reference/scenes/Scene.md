# Scene
シーンは，Three.jsで何をどこにレンダリングするかを設定することができる．オブジェクトやライト，カメラなどを配置する場所である．

## コンストラクタ
```js
Scene()
```

## プロパティ
| プロパティ名 | 型 | 説明 |
| :--- | :--- | :--- |
| background | Object | `null` でない場合，シーンのレンダリング時に使用される背景を設定し，常に最初にレンダリングされます．クリアカラーを設定する`Color`，キャンバスを覆う`Texture`，CubeTexture としての `cubemap`，または Texture としての `equirectangular` を設定することができます．デフォルトは `null` です． |
| environment | Texture | `null`でない場合，このテクスチャは，シーン内のすべての物理マテリアルの環境マップとして設定されます．ただし，MeshStandardMaterial.envMapに割り当てられている既存のテクスチャを上書きすることはできません．デフォルトは`null`です． |
| fog | Fog | シーン内のすべてのレンダリングに影響を与えるフォグの種類を定義するフォグインスタンスです．デフォルトは `null` です． |
| isScene | Boolean | 与えられたオブジェクトが Scene 型であるかどうかをチェックするための読み取り専用フラグ． |
| overrideMaterial | Material | `null`でない場合は，シーン内のすべてのマテリアルがそのマテリアルでレンダリングされるように強制されます．デフォルトは `null` です． |

## メソッド
| メソッド名 | 引数 | 説明 |
| :--- | :--- | :--- |
| .toJSON | `meta`: Object | シーンを three.js の JSON Object/Scene 形式に変換する． |