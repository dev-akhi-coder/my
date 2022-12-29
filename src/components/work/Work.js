import React from 'react'
import "./work.css"
import WorkReusable from '../reusable/WorkReusable'
function Work() {
  return (
    <div className="work">
    <div className="container">
        <div className="work-details change-work">
            <div className="we-work">
                <h2>How we work</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                    
                <div className="touch-1">
                    <a href="#get-touch">Get in touch with us</a>
                    <i className="fa-solid arrow fa-arrow-right"></i>
                </div>
            </div>
            <div className="work-section">
                <WorkReusable title="Strategy" pera ="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.1"
                img ="images/pointer 1.png"/>
                <WorkReusable title="Wireframing" pera ="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.2"
                img ="images/pointer 2.png"/>
                <WorkReusable title="Wireframing" pera ="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.3"
                img ="images/pointer 3.png"/>
                <WorkReusable title="Wireframing" pera ="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.4"
                img ="images/pointer 4.png"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Work