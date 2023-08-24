import { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import { fetchCharacter } from "./services/fetchCharacter";
import Enemy from "./components/Enemy";
import Joke from "./components/Joke";
import LearnMore from "./components/LearnMore";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

function App() {
  const [character, setCharacter] = useState(null);
  const [enemy, setEnemy] = useState(null);
  const [input, setInput] = useState("");
  const [laughCount, setLaughCount] = useState(localStorage.laughScore ? Number(localStorage.laughScore) : 0)

  localStorage.setItem("laughScore", JSON.stringify(laughCount))

  function handleChange(evt) {
    setInput(evt.target.value);
  }

  // CORS error disables this from working. Return later.
  // function fetchInsult() {
  //   fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json/',
  //   {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   )
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  //Alternative API for a GoT quote guessing game
  // function fetchQuote() {
  //   fetch('https://api.gameofthronesquotes.xyz/v1/random')
  //       .then(response => response.json())
  //       .then(json => setQuote(json.sentence))
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  function increaseLaughter (evt) {
    setLaughCount(laughCount + 1)
  }


  useEffect(() => {
    fetchCharacter(setCharacter, "cloud");
    fetch("https://www.moogleapi.com/api/v1/monsters/search?name=chocobo")
      .then((res) => res.json())
      .then((data) => setEnemy(data[2]));
  }, []);

  return (
    <div>
      <Header />
      <SubHeader laughCount={laughCount}/>
      <main>
        <Character character={character} />
        <Enemy character={enemy} />
      </main>
      <form onSubmit={handleSubmit} className="form">
        <button
          type="submit"
          onClick={() => fetchCharacter(setCharacter, input)}
        >
          Select Character
        </button>
        <input type="text" onChange={handleChange} />
      </form>
      <Joke increaseLaughter={increaseLaughter} />
      <LearnMore />
    </div>
  );
}

export default App;
