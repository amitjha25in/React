import React from "react";
import Header from "./Components/Header"
import Posts from "./Components/Posts"

function App() {
  return (
    <div className="container">
      <div className="row mb-3">
        <Header />
      </div>
      <Posts />
    </div>
  );
}

export default App;
