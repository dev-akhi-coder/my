import React from 'react'
import "./contactus.css"
const Contactus = () => {
  return (
    <section className="contact-head">
    <div className="container">
        <div className="main-contact">
            <div className="contact-top">
                <div className="contact-heading">
                    <h2>Contact Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <div className="contact-form">
                    <div className="contact-form-details">
                        <div className="first">
                            <div className="label-1">
                                <label>Name</label><br/>
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div className="label-2">
                                <label>Email</label><br/>
                                <input type="email" placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div className="sceond">
                            <div className="label-3">
                                <label>Subject</label><br/>
                                <input type="text" placeholder="Provide context"/>
                            </div>
                            <div className="label-4">
                                <label>Subject</label><br/>
                                <input type="text" placeholder="Select Subject"/>
                            </div>
                        </div>
                        <div className="area">
                            <h3>Message</h3>
                            <textarea  cols="110" rows="8"></textarea>
                        </div>
                    </div>
                    <div className="send-msg">
                        <a href="#send_msg">Send Message</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contactus