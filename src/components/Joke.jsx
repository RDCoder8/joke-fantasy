import { useEffect, useState } from "react"

function Joke() {
    const [quote, setQuote] = useState("");
    const [messageArray, setMessageArray] = useState(["Want to hear a joke?"])

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
        fetchDadJoke()
        messageArray.shift()
        messageArray.push(quote)
      }

    useEffect(()=> {
        fetchDadJoke()
    }, [])
    
  return (
    <div className="joke-box">
    {messageArray[0]}
    <button onClick={handleButtonClick}>Get Joke</button>
    </div>
  )
}

export default Joke