export async function fetchCharacter(setCharacter, name) {
    try {
      const url = `https://www.moogleapi.com/api/v1/characters/search?name=${name}`
      const response = await fetch(url)
      const data = await response.json()
    setCharacter(data[0])
    } catch (error) {
      console.error(error)
    }
   
  }