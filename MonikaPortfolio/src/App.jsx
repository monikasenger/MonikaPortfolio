import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />

      {/* All Sections in One Page */}
      <Home />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Certifications/>
      <Contact />

      <Footer />
    </>
  );
};

export default App;
