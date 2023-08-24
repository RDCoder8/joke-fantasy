import { useEffect, useState } from "react"

function Joke({increaseLaughter}) {
    const [quote, setQuote] = useState("Want to hear a joke?");
    const [messageArray, setMessageArray] = useState([])
    const [toggle, setToggle] = useState(false)
    let laughter

    function fetchDadJoke() {
        fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => setQuote(json.joke));
      }

      function didTheChocoboLaugh() {
        if (Math.random() > .5) {
          laughter = "The Chocobo chuckled"
          setToggle(true)
        } else {
          laughter = "The Chocobo goaned"
          setToggle(false)
        }
        return laughter
      }

      function handleButtonClick() {
        if (messageArray.length === 0) {
        fetchDadJoke()
        didTheChocoboLaugh()
        messageArray.push(laughter, "Do you want to tell another joke?")
        } else {
          setQuote(messageArray.shift())
          if (messageArray.length === 1 && toggle) {
            increaseLaughter()
          }
        }
      }

  return (
    <div className="joke-box">
    <p className="message">{quote}</p>
    <button onClick={handleButtonClick}>{messageArray.length === 0 ? "Get Joke" : "Continue"}</button>
    </div>
  )
}

export default Joke