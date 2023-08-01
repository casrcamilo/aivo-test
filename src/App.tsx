// Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Containers
import Login from "./containers/Login";
import Home from "./containers/Home";

// Components
import Navbar from "./components/Navbar"
import { Toolbar } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
