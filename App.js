import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* optional redirect */}
        <Route path="/reactsuccess" element={<Navigate to="/" replace />} />

        {/* fallback */}
        <Route path="*" element={<div style={{ padding: "100px", textAlign: "center" }}>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
