import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [get, set] = useState([]);
  useEffect(() => {
    fetch("https://pizza.kando-dev.eu/Pizza")
      .then((response) => response.json())
      .then((data) => set(data));
  }, []);
  return (
    <div>
      {get.map((pizza) => (
        <div>
          <h1>{pizza.id}</h1>
          <h1>{pizza.name}</h1>
          <h1>{pizza.isGlutenFree}</h1>
          <img width="200px" height="400px" src={pizza.kepURL}></img>
        </div>
      ))}
    </div>
  );
}

export default App;
