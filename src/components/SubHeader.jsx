function SubHeader({laughCount}) {
  return (
    <section className="sub-header">
      <audio src="../chocobo.mp3" controls autoPlay loop />
      <h2>Number of Laughs: {laughCount}</h2>
    </section>
  );
}

export default SubHeader;
