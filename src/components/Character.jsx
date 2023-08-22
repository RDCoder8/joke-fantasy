function Character({character}) {
  return (
    <div>
      <h2>{character ? character.name : "Loading character"}</h2>
      <img src={character ? character.pictures[0].url : ""} />
    </div>
  );
}

export default Character;
