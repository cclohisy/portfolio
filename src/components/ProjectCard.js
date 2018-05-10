import React from "react";


const ProjectCard = () => (
    <div>
        <div className="row">
        <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/ttc.png" alt="projec pic" width="200px" height= "300px"/>
                    </div>
                    <div className="card-content">
                        <p>Tipsy Twin Cities: A full stack app using sequelize, node.js, handlebars, and RESTful APIs. 
                            Find the best Happy Hour in Minneapolis</p>
                    </div>
                    <div className="card-action">
                        <a href="https://tipsy-twin-cities.herokuapp.com/" target="#">Visit Site</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/burgerBinge.png" alt="projec pic" width="200px" />
                    </div>
                    <div className="card-content">
                        <p>Burger Binge: Full stack app using mySQL, node.js, bootstrap, and handlebars. 
                            Devour Burgers and see what happens! </p>
                    </div>
                    <div className="card-action">
                        <a href="https://burger-binge.herokuapp.com/" target="#">Visit Site</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/newsTime.png" alt="projec pic" width="200px" height= "300px"/>
                    </div>
                    <div className="card-content">
                        <p>News Time: Full stack app using mongoose,node.js,
                            bootstrap, and handlebars. 
                            Scrape BBC News and catch up on the latest! </p>
                    </div>
                    <div className="card-action">
                        <a href="https://newstimesbbc.herokuapp.com/" target="#">Visit Site</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/got.png" alt="projec pic" width="200px" height= "300px"/>
                    </div>
                    <div className="card-content">
                        <p>GIF of Thrones: Front end app using bootsrap, ajax, and jQuery to search and generate Game of Thrones themed gifs. </p>
                    </div>
                    <div className="card-action">
                        <a href="https://cclohisy.github.io/gotGifGenerator/" target="#">Visit Site</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/BFF.png" alt="projec pic" width="200px" height= "300px"/>
                    </div>
                    <div className="card-content">
                        <p>Friend Finder: App using to find your next BFF./</p>
                    </div>
                    <div className="card-action">
                        <a href="https://bff-finderr.herokuapp.com/" target="#">Visit Site</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/trivia.png" alt="projec pic" width="200px" height= "300px"/>
                    </div>
                    <div className="card-content">
                        <p>Parks and Rec Trivia: Front end app using jQuery and bootstrap.  Test your knowledge of Leslie Knope and Pawnee! </p>
                    </div>
                    <div className="card-action">
                        <a href="https://cclohisy.github.io/TriviaGame-/index.html" target="#">Visit Site</a>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
)

export default ProjectCard
