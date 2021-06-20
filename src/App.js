import "./App.css";
import React, { useEffect, useState } from "react";

function Card(props) {
  return (
    <div>
      <h4>{props.character.name}</h4>
      <p>Yellow</p>
      <p>5 years</p>
    </div>
  );
}

function App() {
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(function () {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListCharacters(data.results);
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
