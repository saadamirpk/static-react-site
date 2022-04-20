import React, { useState } from "react";
import "./App.css";
import Info from "./Components/Info";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactCard from "./Components/ContactCard";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    function swapMode() {
        setDarkMode((prev) => !prev);
    }

    return (
        <div className={darkMode ? "dark-theme" : "light-theme"}>
            <Header swapMode={swapMode} darkMode={darkMode} />
            <div className="row">
                <Info />
                <ContactCard />
            </div>
            <Footer />
        </div>
    );
}

export default App;
