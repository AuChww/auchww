import Home from "./pages/index.js";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js"
import Project from "./pages/project.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/project" exact element={<Project />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
