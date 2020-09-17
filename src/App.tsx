import React, { useState, useRef } from "react";
import "./App.css";
import TextField from "./TextField";

const App: React.FC = () => {
  const [count, setCount] = useState<number | null>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <input ref={inputRef} />
      <TextField
        text={"Hi"}
        person={{ firstName: "Bobs", lastName: "Burgers" }}
        fn={() => console.log("Hi")}
      />
    </div>
  );
};

export default App;
