import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
// import { motion } from "framer-motion";
// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   Move,
//   batch,
//   Sticky,
//   MoveOut,
//   Fade,
//   StickyIn,
//   FadeIn,
//   ZoomIn,
//   ZoomOut,
//   MoveIn,
// } from "react-scroll-motion";

function ImageOpen(props) {
  return (
    <div style={{ transform: `translate3d(0, ${ props.offsetY * 0.8 }px,0)`}}  className="openingBg flexcol zindex-1">

      <div style={{ transform: `translate3d(0, -${ props.offsetY * 0.5 }px,0)`}}  className="headers flexcol center " >
        <h1 className="h1 cw"> Samia & Mali  </h1>
        <h2 className="h2 cw textalinphone">הדבקת ריסים סידור גבות תסרוקות כלה ובניית ציפורניים רחוב יפת 47 יפו</h2>
      </div>
      {/* <div className="endd flexcol center"><div className="kav"></div></div> */}

     
     
     
    </div>
  );
}

export default ImageOpen;
