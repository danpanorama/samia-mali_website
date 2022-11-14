import "./nav.css";
import "../css/App.css";
import { Routes, NavLink, Route, Router } from "react-router-dom";


function NavLinks(props) { 






  return (
    <div className="ulNavLinks flexcol center ">
        <div className="flexrow marginbottom5">
        <NavLink to={'/'} className='link' >דף הבית</NavLink>
        <NavLink to={'/about'} className='link' >  קצת עלינו</NavLink>

        <NavLink to={'/'} className='link' > תוספות שיער</NavLink>

        <NavLink to={'/'} className='link' > תסרוקות</NavLink>
        </div>
        <div className="flexrow marginbottom5">
        <NavLink to={'/'} className='link' >דף הבית</NavLink>
        <NavLink to={'/about'} className='link' >  קצת עלינו</NavLink>

        <NavLink to={'/'} className='link' > תוספות שיער</NavLink>

      
        </div>

      
    </div>
  );
}

export default NavLinks;
