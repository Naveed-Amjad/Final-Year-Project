//import React, { useState } from "react";
//import HomePage from './HomePage.js';
//import './App.css';
//import { Login } from "./Login";
//import { Register } from "./Register";
// import { Footer } from "./Footer";
// import { FrontPage } from "./FrontPage";
// import { Header } from "./Header";

import "./App.css";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Explore from "./components/Explore";
import Cards from "./components/Cards";
import CardMain from "./components/CardMain";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm = (Login);
  // }

  return (
    // <div className="App">
    //   {
    //     currentForm === "login"? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />
    //     // <Footer/>
    //     // <FrontPage/>
    //     // <Header/>
    //   }
    // </div>
  
    
<div>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
  </Routes>
  <FrontPage/>
  <Explore/>
  <Cards/>
  <CardMain/>
  <AboutUs/>
  <Footer/>
  
  </BrowserRouter>
</div>

  );
}

export default App;