import React from "react";
import "../Css/HeaderStyle.css";
import logo from "../Images/reactjs-icon.png";

export default function Header(props: { swapMode: any; darkMode: boolean }) {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="React Logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">ReactCourse-Project1</h4>
        </nav>
    );
}
