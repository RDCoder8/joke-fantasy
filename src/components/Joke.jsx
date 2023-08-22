import { useEffect, useState } from "react"

function Joke() {
    const [quote, setQuote] = useState("Want to hear a joke?");
    const [messageArray, setMessageArray] = useState([])

    function fetchDadJoke() {
        fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => setQuote(json.joke));
      }

      function handleButtonClick() {
        if (messageArray.length === 0) {
        fetchDadJoke()
        messageArray.push("The Chocobo chuckled", "Do you want to tell another joke?")
        } else {
          setQuote(messageArray.shift())
        }
      }

  return (
    <div className="joke-box">
    <p>{quote}</p>
    <button onClick={handleButtonClick}>{messageArray.length === 0 ? "Get Joke" : "Continue"}</button>
    </div>
  )
}

export default Joke