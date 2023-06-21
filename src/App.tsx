// パッケージのインポート
import { useState } from "react";
import { Canvas } from "@react-three/fiber";

// コンポーネントのインポート
import Footer from "./Footer";

// caaのインポート
import "./App.css";
import ModelView from "./ModelView";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas">
        <ModelView model_url="/model1.obj" key={0} />
      </Canvas>
      <Footer />
    </div>
  );
}

export default App;
