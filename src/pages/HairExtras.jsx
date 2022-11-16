import { useDispatch, useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
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
import ContactComp from "../components/contact/ContactComp";
import HairExtraComp from "../components/haircomp/HairExtraComp";


function HairExtras() {

 

 

  return (
    <div className="padd paddingpage">

<HairExtraComp/>
     
     
     
     
     
    </div>
  );
}

export default HairExtras;
