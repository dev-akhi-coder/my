import React from 'react'
import "./meet.css"
const Meet = () => {
  return (
    <div className="meet">
        <div className="container">
            <div className="meet-heading">
                <h2>
                    Meet our team
                </h2>
            </div>
            <div className="meet-images">
                <div className="img-1">
                    <div className="top">
                        <div className="img-overlay">
                            <div className="img-overlay-style">
                                <div className="top-top">
                                    <i id="top" className="fa-brands media-fb fa-facebook"></i>
                                <i id="top" className="fa-brands media-link fa-square-twitter"></i>
                                <i id="top" className="fa-brands media-link fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <h6>
                            John Smith
                        </h6>
                        <p>
                            CEO
                        </p>
                    </div>
                </div>
                <div className="img-1">
                    <div className="top">
                        <div className="img-overlay img-overlay-2">
                            <div className="img-overlay-style">
                                <div className="top-top">
                                    <i id="top" className="fa-brands media-fb fa-facebook"></i>
                                <i id="top" className="fa-brands media-link fa-square-twitter"></i>
                                <i id="top" className="fa-brands media-link fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <h6>
                            Simon Adams
                        </h6>
                        <p>
                            CTO
                        </p>
                    </div>
                </div>
                <div className="img-1">
                    <div className="top">
                        <div className="img-overlay img-overlay-3">
                            <div className="img-overlay-style">
                                <div className="top-top">
                                    <i id="top" className="fa-brands media-fb fa-facebook"></i>
                                <i id="top" className="fa-brands media-link fa-square-twitter"></i>
                                <i id="top" className="fa-brands media-link fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <h6>
                            Paul Jones
                        </h6>
                        <p>
                            Design Lead
                        </p>
                    </div>
                </div>
                <div className="img-1">
                    <div className="top">
                        <div className="img-overlay img-overlay-4">
                            <div className="img-overlay-style">
                                <div className="top-top">
                                    <i id="top" className="fa-brands media-fb fa-facebook"></i>
                                <i id="top" className="fa-brands media-link fa-square-twitter"></i>
                                <i id="top" className="fa-brands media-link fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <h6>
                            Sara Hardin
                        </h6>
                        <p>
                            Project Manager
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Meet