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

function FullImage(props) {
  return (

<div className="h50vh margintop-50" >
<div className=" w100 backimagefull flexcol center ">
  

<div className="paddingdiv ">
<div className="flexcol center">
         <h4 className="headerArchev cw textalinphone">WE CAN'T WAIT TO SEE YOU.</h4>
         <div className="flexrowtocol centerphone bet w100 margintop">
             <button className="buttonsTransparent">Tel-Aviv | Jaffa</button>
             <button className="buttonsTransparent">Yefet 48 Street</button>
         </div>
     </div>
</div>
     
 </div>
</div>
  );
}

export default FullImage;
