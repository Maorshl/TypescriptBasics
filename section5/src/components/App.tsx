import React from "react";
import "../style/App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Hello Typescript!</h1>
      <Button name="Nisan" color="red" clicks={20} />
    </div>
  );
}

export default App;
