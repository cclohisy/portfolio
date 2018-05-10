import React from "react"
import Navbar from "../../components/Navbar"
import Info from "../../components/Info"
import Footer from "../../components/Footer"
import ContactLink from "../../components/ContactLink"
import "./About.css"


const About = () => (
    <div>
        <Navbar />
        <div className="container">
                <Info />
        </div>
        <div className = "row">
        <ContactLink/>
        </div>
        <Footer />
    </div>

)

export default About