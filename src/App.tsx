// Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </Router>
  );
}

export default App;
