import { Routes, NavLink, Route, Router } from "react-router-dom";
import "./nav.css";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { activeLoaderReducer } from "../Redux/Actions/LoaderActions";
import { useState } from "react";
import { useEffect } from "react";
import TopNavComp from "./TopNavComp";
import NavLinks from "./NavLinks";

function Navphone(props) {
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
    <div className="flexcol center visible navphone h100">
        <h1 onClick={props.openav} className="h1 "><ion-icon name="close-outline"></ion-icon></h1>
       

        <div className="firstchildnavphone flexcol  center">
  <h1 className="h1 ">S&M</h1>
        <NavLink to={'/'} className='linkphone' >דף הבית</NavLink>
        <NavLink to={'/contact'} className='linkphone' >   צור קשר</NavLink>

        <NavLink to={'/'} className='linkphone' > תוספות שיער</NavLink>

        <NavLink to={'/'} className='linkphone' > תסרוקות</NavLink>
   
        <NavLink to={'/'} className='linkphone' > הבית</NavLink>
        <NavLink to={'/about'} className='linkphone' >  קצת עלינו</NavLink>

        <NavLink to={'/'} className='linkphone' > תוספות </NavLink>

       <h4 className="h4 shape">03-657481</h4>
        </div>

       

 
    </div>
  );
}

export default Navphone;
