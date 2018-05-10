import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProjectCard from "../../components/ProjectCard"
import ContactLink from "../../components/ContactLink"
import "./Portfolio.css"

const Portfolio = () => (
    <div>
        <Navbar />
        <div className ="container">
        <div className ="row">
        <ProjectCard/>
        </div>
        <div className = "row">
        <ContactLink/>
        </div>
        
        </div>

        <Footer />
    </div>

)

export default Portfolio