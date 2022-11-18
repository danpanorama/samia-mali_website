import "./nav.css";
import "../css/App.css";
import {  NavLink} from "react-router-dom";


function NavLinks(props) { 






  return (
    <div className="ulNavLinks flexcol center ">
        <div className="flexrow marginbottom5">
        <NavLink to={'/'} className='link' >דף הבית</NavLink>
        <NavLink to={'/contact'} className='link' >   צור קשר</NavLink>

        <NavLink to={'/extras'} className='link' > תוספות שיער</NavLink>

        <NavLink to={'/hairstyle'} className='link' > תסרוקות</NavLink>
        </div>
        <div className="flexrow marginbottom5">
        <NavLink to={'/'} className='link' > הבית</NavLink>
        <NavLink to={'/about'} className='link' >  קצת עלינו</NavLink>

        <NavLink to={'/'} className='link' > תוספות </NavLink>

      
        </div>

      
    </div>
  );
}

export default NavLinks;
