import { Routes, useLocation, Route, Router } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Navbar from "./Navbar";
import '../css/App.css';
import { useState } from "react";

import {AnimatePresence} from 'framer-motion';
import ContactScreen from "../pages/ContactScreen";


function NavRoute() {
  const location =useLocation()
  const [activeNav,setActiveNav] = useState(false);


  return (
    <div className=" ">
   
      <Navbar  />
      
      <AnimatePresence>
       
        
      <Routes location={location} key={location.path} >
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/*" element={<HomeScreen />} exact />
        <Route path="/contact" element={<ContactScreen />} exact />

   


        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
        
      </AnimatePresence>
    </div>
  );
}

export default NavRoute;
