import React from 'react'
import "./blog.css"
export const Blog = () => {
  return (
    <div className="blog">
        <div className="container">
            <div className="blog-title">
                <h2>
                    Our blog
                </h2>
            </div>
           <div className="main-card">
                <div className="card-seonde">
                    <img src="images/arabic.png" alt=""/>
                    <div className="card-details">
                        <div className="label">
                            <label>19 Jan 2022</label>
                        </div>
                        <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                        <p>
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        </p>
                       <div className="more">
                        <a href="#read-more">Read More</a>
                        <i className="fa-solid  fa-arrow-right"></i>
                       </div>
                    </div>
                    
                </div>
                <div className="card-seonde">
                    <img src="images/women-computers.png" alt=""/>
                    <div className="card-details">
                        <div className="label">
                            <label >19 Jan 2022</label>
                        </div>
                        <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                        <p>
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        </p>
                       <div className="more">
                        <a href="#read-more">Read More</a>
                        <i className="fa-solid  fa-arrow-right"></i>
                       </div>
                    </div>

                </div>
                <div className="card-seonde">
                    <img src="images/apple-monitors.png" alt=""/>
                    <div className="card-details">
                        <div className="label">
                            <label>19 Jan 2022</label>
                        </div>
                        <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                        <p>
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        </p>
                       <div className="more">
                        <a href="#read-more">Read More</a>
                        <i className="fa-solid  fa-arrow-right"></i>
                       </div>
                    </div>

                </div>
           </div>
        </div>
    </div>
  )
}
export default Blog