import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/service.css";
import {  NavLink} from "react-router-dom";

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

function Service(props) {
  return (
<div   className=" flexcol center">
    
<div className=" gridrow4 w90">
  <NavLink to={'/hairstyle'}  className="square  s1">
 
    <h3 className="headerinsideSqeare"><div className="content">תסרוקות</div></h3>

  </NavLink>
  <NavLink to={'/extras'} className="square s2">
  <h3 className="headerinsideSqeare"><div className="content">תוספות שיער</div></h3>
  </NavLink>
  <NavLink to={'/hairstyle'} className="square s3">
  <h3 className="headerinsideSqeare"><div className="content">גבות</div></h3>

  </NavLink>
  <NavLink to={'/extras'} className="square s4">
  <h3 className="headerinsideSqeare"><div className="content">ריסים</div></h3>

  </NavLink>

    </div>
</div>
  );
}

export default Service;
