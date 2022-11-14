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

function TexturaComp(props) {
  return (
<div   className=" ">
    
<div className=" flexrow  ">
  <div className="w50 marginright  ">
<div className="w100  ">
<h1 className="headerArchev colorgraydarker">A LUXURY SALON EXPERIENCE IN THE HEART OF THE FINANCIAL DISTRICT 
NYC</h1>
</div>

  </div>
  <div className="w50">
    <div className="paddingLittle flexcol center">
        <div className="paregraphdiv flexcol center">
            <h4 className="h4 marginbottomp colorgray">
            FABIO DOTI SALON IS THE PERFECT PLACE TO GET AN EXCEPTIONAL HAIRSTYLE FROM TOP-NOTCH, INTERNATIONALLY TRAINED STYLISTS AND COLORISTS. 
            </h4>
            <p className="paregraph marginbottomp colorgray">
            Situated in Lower Manhattan, our salon near Wall Street as well as Battery Park and the World Trade Center area. We are the most recommended salon for hotels and spas in the  Battery Park neighborhood. Our salon provides services to men and women of any hair type and style: edgy or classic, straight or curly, short or long. We believe that hair should be defined by its nature and its shape, and we use the industry's top brand, Keratase to bring out your hair's best. 
            </p>
            <p className="paregraph colorgray">Our mission is to provide you with forward-thinking, sophisticated style. Our space, designed by Italian architect Matias Sagaria, is filled with linear balance and injects our inspiration with modernity and purity.</p>
        </div>

        <div className="w100 margintop">
           <button className="buttons"> read more</button>
        </div>
    </div>

  </div>

    </div>
</div>
  );
}

export default TexturaComp;
