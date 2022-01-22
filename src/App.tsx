import React from "react";
import "./App.css";
import Info from "./Components/Info";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactCardLight from "./Components/ContactCardLight";

function App() {
    return (
        <React.Fragment>
            <Header />
            <div className="row">
                <Info />
                <ContactCardLight />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
