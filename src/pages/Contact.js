import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactLink from "../components/ContactLink"
import "./Portfolio/Portfolio.css"

const Contact = () => (
    <div>

        <Navbar />
        <div className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">
                            <h4> Contact Me </h4>
                        </span>
                        {/* < div className="row"> */}
                            <a href="mailto:cclohisy@gmail.com?Subject=Portfolio%20Inquiry" target="_top"><i className="large material-icons">email</i> </a>
                            <br/><a href="tel:715-245-3680"><i className="large material-icons">phone_in_talk</i></a>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        <ContactLink />
        <Footer />


    </div>

)

export default Contact