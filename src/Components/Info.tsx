import React from "react";
import "../Css/InfoStyle.css";

export default function Info() {
    return (
        <div className="content">
            <h1 className="title">Fun Facts About React</h1>
            <ul className="facts_list">
                <li>Was First Released in 2013</li>
                <li>Was Originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
    );
}
