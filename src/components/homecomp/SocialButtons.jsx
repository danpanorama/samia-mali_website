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

function SocialButtons() {
  return (
    <div className=" flexcol ">
        <div className="socialbutton"></div>
        <div className="socialbutton"></div>
        <div className="socialbutton"></div>
        <div className="socialbutton"></div>
    </div>
  );
}

export default SocialButtons;
