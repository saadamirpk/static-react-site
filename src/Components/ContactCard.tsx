import React from "react";
import "../Css/ContactCardStyle.css";
import profile from "../Images/saad.jpg";

export default function ContactCard() {
    return (
        <div className="contact-light">
            <img src={profile} alt="" width="100%" />
            <h1>Saad Amir</h1>
            <h4 className="designation">Tech Enthusiast</h4>
            <p className="web">saad.portfolio.website</p>
            <div className="btn-holder">
                <button className="btn-email">
                    <i className="fa fa-envelope" />
                    Email
                </button>
                <button className="btn-linkedin">
                    <i className="fa fa-linkedin" />
                    LinkedIn
                </button>
            </div>
            <div className="data-holder">
                <h4>About me</h4>
                <p>
                    I am a frontend developer with a particular interest in
                    making things simple and automating daily tasks. I try to
                    keep up with security and best practices, and am always
                    looking for new things to learn.
                </p>
                <h4>Interests</h4>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic.
                    Entrepreneur. Travel geek. Pop culture ninja. Coffee
                    fanatic.
                </p>
            </div>
        </div>
    );
}
