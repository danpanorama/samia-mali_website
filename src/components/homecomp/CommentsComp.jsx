import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/contactpage.css";

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
import CommentsCarusel from "../carusela/CommentsCarusel";
import Info from "../aboutcomp/Info";
import { Autoplay } from "swiper";

function CommentsComp(props) {
  return (
    <div className="  ">
        <Info/>
        <h1 className="tac fw100 colorgraydarker">Comments we get all the time</h1>
        <CommentsCarusel/>

     
    </div>
  );
}

export default CommentsComp;
