import React from 'react'
import "./banner.css"
const Banner = () => {
  return (
    <section className="banner">
    <div className="container main-banner">
        <div className="banner-text">
            <div className="banner-heading">
                <h1>Building stellar </h1>
                <h1>websites for early</h1>
                <h1>startups</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                </p>
                <p>
                    eiusmod tempor incididunt.
                </p>
                <div className="btn">
                    <a href="#view" className="view">View our work</a>
                    <a href="#view-pricing" className="pricing">View Pricing</a>
                    <i className="fa-solid priceing-arrow fa-arrow-right change-arrow"></i>
                </div>
            </div>
            <div className="banner-logo">
                <img src="images/banner-img.png" alt="banner-imag"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Banner