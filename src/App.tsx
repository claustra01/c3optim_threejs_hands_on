// パッケージのインポート
import { useState } from "react";
import { Canvas } from "@react-three/fiber";

// コンポーネントのインポート
import Footer from "./Footer";

// caaのインポート
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ここから削除 */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          fontSize: "50px",
          fontWeight: "bold",
          color: "#c34eff",
        }}
      >
        C3×OPTiM
      </span>
      {/* ここまで */}
      <Footer />
    </div>
  );
}

export default App;
