import React from 'react'
import "./benifit.css"
const Benifit = () => {
  return (
    <div className="benefits">
    <div className="container">
        <div className="work-heading">
            <h2>
                The benefits of working <br/> with us
            </h2>
        </div>
        <div className="fetures-card">
            <div className="card-details change">
                <div className="card-details-part">
                    <i className="fa-regular icon-item fa-note-sticky"></i>
                    <h6>Customize with ease</h6>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                    </p>
                </div>
            </div>
            <div className="card-details change">
                <div className="card-details-part">
                    <i className="fa-solid icon-item fa-pen-ruler"></i>
                    <h6>Perfectly Responsive</h6>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                    </p>
                </div>
            </div>
            <div className="card-details change">
                <div className="card-details-part">
                    <i className="fa-solid icon-item fa-people-roof"></i>
                    <h6>Friendly Support</h6>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
                    </p>
                </div>
            </div>
        </div>
        <div className="companies">
            <div className="user">
                <h3>100.000+</h3>
                <p>Finsweet Users</p>
            </div>
            
            <div className="dv-1">
                <img src="images/lorem.png" alt=""/>
            </div>
            <div className="dv-2">
                <img src="images/logoip.png" alt=""/>
            </div>
            <div className="dv-3">
                <img src="images/circle-logoip.png" alt=""/>
            </div>
            <div className="dv-4">
                <img src="images/rander-logo.png" alt=""/>
            </div>
            <div className="dv-5">
                <img src="images/Logo 5.png" alt=""/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Benifit