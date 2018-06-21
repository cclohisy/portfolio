import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProjectCard from "../../components/ProjectCard"
import ContactLink from "../../components/ContactLink"
import "./Portfolio.css"
import portCards from "../../portData.json"


const Portfolio = () => (
    <div>
        <Navbar />
        <div className ="container">
        <div className ="row">
        {portCards.map(card =>(
            <ProjectCard
            key = {card.id}
            id = {card.id}
            title = {card.title}
            link = {card.webLink}
            description = {card.description}
            src = {card.src}
            code = {card.code}
            />

        ))}
        
        </div>
        <div className = "row">
        <ContactLink/>
        </div>
        
        </div>

        <Footer />
    </div>

)

export default Portfolio