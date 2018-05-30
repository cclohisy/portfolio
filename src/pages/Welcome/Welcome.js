import React from "react"
import "./Welcome.css"
import { Link } from "react-router-dom"
import ContactLinks from "../../components/ContactLink"


const Welcome = () => (
    // <div className="valign-wrapper">

    <div className="container valign-wrapper">

            <div className="row">
                <p id="name" > Cecilia Clohisy</p>
                <p>Full-Stack Web Developer </p>
                <p id="welcomeInfo">A hardworking and detail oriented programmer who spent the last five years in the financial services industry. 
                Skills in JavaScript, React.js, Node.js, MySql, and MongoDB. </p>
                <Link to="/about" className="btn-floating btn-large pulse waves-effect waves-light red">
                    <i className="material-icons">details</i>
                </Link>
            </div>
            {/* <div className="row"> */}

                {/* <ContactLinks /> */}

            {/* </div> */}
        {/* </div> */}
    </div>

)

export default Welcome

{/* <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">

email, fast_forwrd, face, forward, mail, mail_outline, peronson, person_outline, phone_iphone, add</i></a>


*/}
