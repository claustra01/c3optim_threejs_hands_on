// パッケージのインポート
import { useRef, Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls as OrbitControlImpl } from "three-stdlib";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls, Preload, PerspectiveCamera } from "@react-three/drei";

// ModelViewのpropsの型定義
type ModelViewProps = {
  model_url: string;
  key: number;
};

// モデルローダー
const Model = (args: any) => {
  const model = useLoader(OBJLoader, args.model_url as string);
  model.rotation.x = -1.5;

  return (
    <primitive
      object={model}
      ref={args.mesh as Mesh}
      scale={[0.1, 0.1, 0.1]}
      {...args}
    />
  );
};

function ModelView(props: ModelViewProps) {
  // コントローラー用Refの定義
  const controlRef = useRef<OrbitControlImpl>({} as OrbitControlImpl);
  //   メッシュ定義
  const mesh = useRef({} as Mesh);

  return (
    <>
      {/* ローディングが終わるまでは何も表示しない */}
      <Suspense fallback={null}>
        {/* 上記で定義したモデルローダーで表示される3Dモデル */}
        <Model mesh={mesh} model_url={props.model_url} position={[0, 0, 0]} />
        <Preload all />
        {/* 遠近カメラ */}
        <PerspectiveCamera
          makeDefault
          args={[35, window.innerWidth / window.innerHeight, 0.1, 2000]}
          position={[-5, 4, 5]}
        />
      </Suspense>
      {/* マウスでの操作を可能にする */}
      <OrbitControls makeDefault ref={controlRef} />
      {/* xyz軸を表示 */}
      <axesHelper />
    </>
  );
}
// ModelViewコンポーネントとして出力
export default ModelView;