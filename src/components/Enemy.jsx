function Enemy({character}) {
  return (
    <div className="character-container">
      <h2>{character ? character.name : "Loading Chocobo"}</h2>
      <img src={character ? character.picture : ""} />
    </div>
  );
}

export default Enemy;
