// パッケージのインポート
import { useState } from "react";
import { Canvas } from "@react-three/fiber";

// コンポーネントのインポート
import Footer from "./Footer";
import ModelView from "./ModelView";

// caaのインポート
import "./App.css";

function App() {
  // 表示する3Dモデルのインデックスの状態
  const [selectedModel, setSelectedModel] = useState<number>(0);
  // 3Dモデルのパスを保持する変数
  const models: string[] = ["/model1.obj", "/model2.obj", "/model3.obj"];

  return (
    <div className="App">
      {/* 3Dモデル切り替え用ボタン */}
      <div className="model_switch_button">
        {/* 繰り返し処理 */}
        {models.map((_, index) => {
          return (
            <div
              className={`${index === selectedModel ? "selected" : ""}`}
              key={index}
              // クリックイベントの処理
              onClick={() => {
                setSelectedModel(index);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <Canvas className="canvas">
        <ModelView model_url={models[selectedModel]} key={selectedModel} />
      </Canvas>
      <Footer />
    </div>
  );
}

export default App;