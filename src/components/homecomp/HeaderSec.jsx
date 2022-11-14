import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/middlesection.css";

import { motion } from "framer-motion";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
  batch,
  Sticky,
  MoveOut,
  Fade,
  StickyIn,
  FadeIn,
  ZoomIn,
  ZoomOut,
  MoveIn,
} from "react-scroll-motion";

function HeaderSec(props) {
  return (

<div className="flexrow center margintop-50" >
  
 <div className="kavrohav"></div>
    <h1 className="h1  colorgraydarker"> 
   
     Samia & Mali 
     
    </h1>
   <div className="kavrohav"></div>
</div>
     

  );
}

export default HeaderSec;
