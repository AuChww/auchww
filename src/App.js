import Home from "./pages/index.js";
import About from "./pages/about.js";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js"
import Circle from "./components/Circle.js";
import Project from "./pages/project.js";
import Info from "./pages/info.js";



function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Info />
    </Router>
  );
}

export default App;
