import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Home, About, Contact, AMA, Projects } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ama" element={<AMA />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
