import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const name = useFormInput("Name");
  const surname = useFormInput("Surname");

  return (
    <div className="App">
      <div className="page">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>click me!</button>
      </div>
      <div className="page">
        <p>{name.value + " " + surname.value}</p>
        <section>
          <div label="Name">
            <input {...name} />
          </div>
          <div label="Surname">
            <input {...surname} />
          </div>
        </section>
      </div>
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default App;
