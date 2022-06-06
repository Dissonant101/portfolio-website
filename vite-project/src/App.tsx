import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Home, About } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
