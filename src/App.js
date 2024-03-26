import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/home";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<HomeScreen />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
