import React from "react";
import "../Css/FooterStyle.css";
import twitter from "../Images/ic_twitter.png";
import facebook from "../Images/ic_fb.png";
import instagram from "../Images/ic_ig.png";
import gitHub from "../Images/ic_git.png";

export default function Footer(props: { darkMode: boolean }) {
    return (
        <footer>
            <div className="icon-holder">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={gitHub} alt="" />
            </div>
        </footer>
    );
}
