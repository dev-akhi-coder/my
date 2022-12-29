import React from 'react'
import "./project.css"

export const Project = () => {
  return (
    <section className="project">
    <div className="container">
        <div className="main-projects">
            <div className="projects">
                <h2>View our projects</h2>
                <div className="div">
                    <a href="#view-more">View More</a>
                    <i className="fa-solid view-more  fa-arrow-right"></i>
                </div>

            </div>
            <div className="projects-section">
                <div className="project-bcg">
                    <div className="projects-text">
                        <h2>Workhub office Webflow <br/>
                        Webflow Design </h2>
                        <p>
                            Euismod faucibus turpis eu gravida <br/> mi. Pellentesque et velit aliquam  
                        </p>
                        <div className="project-link">
                            <a href="#view-project">View project</a>
                            <i className="fa-solid view-more-1  fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="project-single">
                    <div className="project-item2">
                        <img src="images/design-2.png" alt="design"/>
                    </div>
                    <div className="project-item3">
                        <img src="images/human-3.png" alt="human"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Project