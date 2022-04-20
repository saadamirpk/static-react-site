import React, { useState } from "react";
import "./App.css";
import Info from "./Components/Info";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactCardLight from "./Components/ContactCardLight";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    function swapMode() {
        setDarkMode((prev) => !prev);
    }

    return (
        <React.Fragment>
            <Header swapMode={swapMode} darkMode={darkMode} />
            <div className="row">
                <Info darkMode={darkMode} />
                <ContactCardLight darkMode={darkMode} />
            </div>
            <Footer darkMode={darkMode} />
        </React.Fragment>
    );
}

export default App;
