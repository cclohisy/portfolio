import React from "react"
import "./Welcome.css"
import { Link } from "react-router-dom"
import ContactLinks from "../../components/ContactLink"


const Welcome = () => (
    <div className ="container">
        <div className ="row">
            <h6> Hi I'm Cecilia Clohisy. </h6> 
            <h4>Welcome to my portfolio!</h4>
            <Link to="/about" className= "btn-floating btn-large pulse waves-effect waves-light red">
            <i className = "material-icons">details</i>
            </Link>
        </div>
        <div className="row">
        
        {/* <ContactLinks /> */}

        </div>
    </div>

)

export default Welcome

{/* <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">

email, fast_forwrd, face, forward, mail, mail_outline, peronson, person_outline, phone_iphone, add</i></a>


*/}
