import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [quote, setQuote] = useState("")
const [character, setCharacter] = useState(null)
const [input, setInput] = useState("tifa")

function setName(evt) {
  setInput(evt.target.value)
}

function fetchDadJoke() {
  fetch('https://icanhazdadjoke.com/', 
  {
    headers: {
      'Accept': 'application/json'
    }
  })
      .then(response => response.json())
      .then(json => setQuote(json.joke))
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


async function fetchCharacter(name) {
  try {
    const url = `https://www.moogleapi.com/api/v1/characters/search?name=${name}`
    const response = await fetch(url)
    const data = await response.json()
  setCharacter(data[0])
  } catch (error) {
    console.error(error)
  }
 
}

useEffect(() => {
  fetchCharacter("cloud")
}, [])

  return (
    <>
     <h1>Hello</h1>
     <h2>{character ? character.name : "Choose a character"}</h2>
     <img src={character ? character.pictures[0].url : ""} />
     <button onClick={fetchDadJoke}>Get Joke</button>
     {quote ? quote : "Want to hear a joke?" }
     <form>
      <input type="text" />
      <button type='submit' onClick={() => fetchCharacter(input)}>Select Character</button>
     </form>
    </>
  )
}

export default App
