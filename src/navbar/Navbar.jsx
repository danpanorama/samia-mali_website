import { Routes, NavLink, Route, Router } from "react-router-dom";
import "./nav.css";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { activeLoaderReducer } from "../Redux/Actions/LoaderActions";
import { useState } from "react";
import { useEffect } from "react";
import TopNavComp from "./TopNavComp";
import NavLinks from "./NavLinks";

function Navbar(props) {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const [windowState,setWindowState] = useState(false);
 




  useEffect(()=>{
    console.log(window.innerWidth)
    if(window.innerWidth < 1000){
      console.log('yesr')
      setWindowState(true)
    }else{
      setWindowState(false)
    }

  },[window.innerWidth])




  return (
    <div className="navbar">
      <TopNavComp/>
      <div className="Nav_all flexcol center">

      <div className="NavFirstChild gridrow h100   ">
        <div className="logo_nav flexcol center h100">
          <h1 className="logoh1">Samia&Mali</h1>
        </div>
      <div className="flexcol center displaynon ">
      <div className="flexcol center  ">
          <NavLinks/>
          
       </div> 
       </div>

       <div className="flexrow center displaynon">
       <div className="callNowButton">
          <span className="callnowbtn">התקשרי עכשיו</span>
        </div>
       
        <div className="socialbuttons flexrow center">
          <p className="icons"><ion-icon name="logo-instagram"></ion-icon></p>
          <p className="icons"><ion-icon name="logo-facebook"></ion-icon></p>
          <p className="icons"><ion-icon name="logo-google"></ion-icon></p>
          <p className="icons"><ion-icon name="logo-youtube"></ion-icon></p>



        </div>
       </div>
      

      </div>
      
      
    </div>
    </div>
  );
}

export default Navbar;
