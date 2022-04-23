import React from "react";
import NavBar from "./navBar";
import TitleBar from "./titleBar";

const App = () => {
  return (
    <div className="bg-custom-black min-h-screen h-auto">
      <header>
        < NavBar />
      </header>
      <main className="bg-custom-black h-full">
        < TitleBar />
      </main>
    </div>
  );
}

export default App;
