import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
        <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
      <Footer />
    </>


  );
}

export default App;
