import SectionItem from "./SectionItem"

function LearnMore() {
    const sections = [
        {
            name: "Final Fantasy News",
            link: "https://na.finalfantasy.com/news",
            img: "https://cache-na.finalfantasy.com/uploads/content/file/2018/06/06/4672/logo_FFonly.png",
            alt: "Final Fantasy game logo",
            description: "Click here for more final fantasy news"
        },
        {
            name: "ICANHAZDADJOKE",
            link: "https://icanhazdadjoke.com/",
            img: "/smile.png",
            alt: "A dad joke",
            description: "Click here for more dad jokes"
        }
    ]

    const displaySections = sections.map((section, index) => {
        return <SectionItem key={index} {...section}/>
    })
  return (
    <section className="section-container">
        {displaySections}
    </section>
  )
}

export default LearnMore