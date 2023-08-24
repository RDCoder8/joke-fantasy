

function SectionItem(props) {
  return (
    <div className="section-item">
        <h2>{props.name}</h2>
        <a href={props.link}>
            <img src={props.img} alt={props.alt} />
            <p>{props.description}</p>
        </a>
    </div>
  )
}

export default SectionItem
