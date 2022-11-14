import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
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
import SocialButtons from "./SocialButtons";
import ImageOpen from "./ImageOpen";

function HomeOpenImage(props) {
 
  return (
    <div  className="">
      <ImageOpen offsetY={props.offsetY} />
  
    
     
     
     
     
     
    </div>
  );
}

export default HomeOpenImage;
