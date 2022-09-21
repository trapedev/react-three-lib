# はじめてのシーン作成

## Canvas の設定

まず、@react-three/fiber から `<Canvas />` コンポーネントをインポートして、React ツリーに配置するところから始めます。

```jsx
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      <Canvas />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Canvas コンポーネントは、舞台裏で重要なセットアップ作業を行います。

- レンダリングに必要な基本的な構成要素である`Scene`と`Camera`をセットアップします。
- フレームごとに`Scene`をレンダリングするので、従来のレンダリングループは必要ありません。

```
Canvas は親ノードに合わせて反応するので、親の幅と高さ（この場合は #canvas-container ）を変更することで大きさを制御することができます。
```

## Mesh コンポーネントの追加

実際にシーンで何かを見るには、小文字の`<mesh />`ネイティブ要素を追加します。これは、`new THREE.Mesh()`に直接相当するものです。

```jsx
<Canvas>
  <mesh />
```

```
Three.js のオブジェクトは、通常の ReactDOM で <div /> や <span /> と記述するのと同じように、ネイティブの JSX 要素として扱われることに注意してください。一般的なルールとして、Fiberコンポーネントは、three.jsのキャメルケースバージョンの名前で利用できます。
```

Mesh は three.js の基本的なシーンオブジェクトで、3D 空間で形状を表現するために必要なジオメトリとマテリアルを保持するために使用されます。ここでは、BoxGeometry と MeshStandardMaterial を使用して新しいメッシュを作成し、自動的にその親にアタッチします。

```jsx
<Canvas>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
```

ここで何が起こっているのかを正確に理解するために、ちょっと立ち止まってみましょう。先ほど書いたコードは、この three.js のコードに相当するものです。

```jsx
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.querySelector("#canvas-container").appendChild(renderer.domElement);

const mesh = new THREE.Mesh();
mesh.geometry = new THREE.BoxGeometry();
mesh.material = new THREE.MeshStandardMaterial();

scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```

### コンストラクタの引数

BoxGeometry のドキュメントによると、オプションとして、幅、長さ、深さの 3 つの引数を渡すことができる。

```jsx
new THREE.BoxGeometry(2, 2, 2);
```

Fiber でこれを行うには、コンストラクタの引数を表す配列を常に受け取る args プロパティを使用します。

```jsx
<boxGeometry args={[2, 2, 2]} />
```

```
引数を変更するたびに、オブジェクトを再構築しなければならないことに注意してください!
```

## 光源の追加

次に、これらのコンポーネントをキャンバスに配置し、シーンにライトを追加します。

```jsx
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
```

### Props

ここで、Fiber の最後の基本概念である、React props が three.js オブジェクト上でどのように機能するかを紹介します。Fiber コンポーネントに prop を設定すると、three.js インスタンスに同じ名前のプロパティが設定されます。

ドキュメントによると、オプションで色を設定することができますが、prop を受け取ることもできるようです。

```jsx
<ambientLight intensity={0.1} />
```

これは以下のコードと同等の意味になります．

```jsx
const light = new THREE.AmbientLight();
light.intensity = 0.1;
```

### Shortcuts

`.set()`メソッドを持つプロップ（カラー、ベクターなど）には、いくつかのショートカットがあります。

```jsx
const light = new THREE.DirectionalLight();
light.position.set(0, 0, 5);
light.color.set("red");
```

これを JSX で同等の意味に変換すると以下のようになります．

```jsx
<directionalLight position={[0, 0, 5]} color="red" />
```

## 結果

```jsx
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>
```
