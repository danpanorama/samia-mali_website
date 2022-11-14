import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/service.css";

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
  <div className="square">ריסים</div>
  <div className="square"></div>
  <div className="square"></div>
  <div className="square"></div>

    </div>
</div>
  );
}

export default Service;
