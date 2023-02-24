import React from "react";
import {Route, Routes} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";
import {HomePage} from "./pages/HomePage";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Routes>
        </>
    );
}

export default App;
