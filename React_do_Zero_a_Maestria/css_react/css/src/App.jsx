import "./App.css";
import MyComponent from "./component/MyComponent";
import { useState } from "react";
import Title from "./component/Title";
function App() {
  const n = 15;
  const [nome] = useState("Sérgio");

  const redTitle = true;

  return (
    <div>
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de component */}
      <MyComponent />
      {/* css do component vazando para App.js */}
      <p>Este paragrafo é do App.js</p>
      {/* inline css */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid red",
          backgroundColor: "green",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "red" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={nome === "Sérgio" ? { backgroundColor: "cyan" } : null}>
        Nome
      </h2>
      {/* classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título possui classe dinâmica
      </h2>
      {/* css modules */}
      <Title />
    </div>
  );
}

export default App;
