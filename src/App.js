import React from "react";
import Tooltip from "./tooltip"; // Make sure the import path is correct

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Tooltip position="bottom" text="This is tooltip!" />
    </div>
  );
}

export default App;