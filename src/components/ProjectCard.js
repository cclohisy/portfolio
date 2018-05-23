import React from "react";

const ProjectCard = props => (
    <div>
        <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={props.src} alt={props.title} width="200px" height="300px" />
                    </div>
                    <div className="card-content">
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action">
                        <a href={props.link} target="#">Visit Site</a>
                    </div>
                </div>
            </div>
        
       

    </div>
)

export default ProjectCard
