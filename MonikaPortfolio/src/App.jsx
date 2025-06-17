import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div >
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
