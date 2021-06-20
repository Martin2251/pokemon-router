import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(function () {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListCharacters(data.name);
      });
  }, []);
  return (
    <div className="App">
      {listCharacters.map(function (character) {
        return <Card character={character}></Card>;
      })}
    </div>
  );
}

export default App;
