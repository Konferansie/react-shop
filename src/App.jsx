import React from "react";
import Shop from "./layout/Shop";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {ContextProvider} from "./context";


function App() {
    return (

        <div className="App">
            <Header/>
            <ContextProvider>
                <Shop/>
            </ContextProvider>
            <Footer/>
        </div>
    );

}

export default App;
