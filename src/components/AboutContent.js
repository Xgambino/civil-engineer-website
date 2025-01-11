import "./AboutContentStyles.css"
import { Link } from "react-router-dom";
import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a Civil and Structural Engineer with expertise in infrastructure design and project management, focused on sustainable, cost-effective solutions for Africa's infrastructure.</p>
            <Link to="/contact" ><button className="btn">Get in Touch</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent