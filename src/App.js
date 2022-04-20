import React from "react";
import NavBar from "./navBar";

const App = () => {
  return (
    <div className="App bg-black h-screen">
      < NavBar />
      <h1 className="text-3xl font-bold text-white">
        MarkDown Live Editor
      </h1>
    </div>
  );
}

export default App;
