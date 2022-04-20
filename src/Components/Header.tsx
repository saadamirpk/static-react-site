import React from "react";
import "../Css/HeaderStyle.css";
import logo from "../Images/reactjs-icon.png";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Header(props: { swapMode: any; darkMode: boolean }) {
    return (
        <nav
            className={"mynav " + (props.darkMode ? "mynavdark" : "mynavlight")}
        >
            <img className="nav--logo" src={logo} alt="React Logo" />
            <h3
                className={
                    "nav--logo_text " +
                    (props.darkMode
                        ? "nav--logo_text_dark"
                        : "nav--logo_text_light")
                }
            >
                ReactFacts
            </h3>
            <DarkModeToggle
                onChange={props.swapMode}
                checked={!props.darkMode}
                size={50}
            />
        </nav>
    );
}
