import SectionItem from "./SectionItem"

function LearnMore() {
    const sections = [
        {
            name: "Final Fantasy News",
            link: "https://na.finalfantasy.com/news",
            img: "https://cache-na.finalfantasy.com/uploads/content/file/2018/06/06/4672/logo_FFonly.png",
            alt: "Final Fantasy game logo",
            description: "Click here for more final fantasy news"
        }
    ]

    const displaySections = sections.map(section => {
        return <SectionItem {...section}/>
    })
  return (
    <section className="section-container">
        {displaySections}
    </section>
  )
}

export default LearnMore