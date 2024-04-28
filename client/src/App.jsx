import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Achievements from "./Pages/Achievements";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
