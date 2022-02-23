import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<Menu />} />
                <Route path="*" element={<NotFound />} />
                
            </Routes>
        </Router>
    );
};

export default App;
