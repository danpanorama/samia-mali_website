import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/extra.css";

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
import ContactComp from "../../components/contact/ContactComp";


function HairExtraComp() {

 

 

  return (
    <div className="w100">
        <div className="headersExtras flexcol center">
            <h1 className="headerSections">HairStyle</h1>
            <p className="text">Paris</p>
        </div>
        <div className="gridosh">
            <div className="imagebgbig immg2"></div>

        </div>
        <div className="textParegraph w100 flexcol ">
            <h4 className="colorgraydarker paregr ">במספרת מלי וסאמיה אנו מבצעים תוספות שיער בשיטת התפירה. בשיטה זו לא מבצעים הלחמה או הדבקה, לא מזיקים לשיער כלל ונהנים ממראה טבעי וייחודי של שיער שופע .</h4>
<h1 className="h1 tar">תוספות שיער ללא נזק</h1>
<h4 className="colorgraydarker paregr fw100 h44 w50"><strong>ללא הלחמה וללא הדבקה –</strong> תוספות שיער בשיטת התפירה.אל תוותרי על אחד מסממני היופי הנשי – ועל מראה צעיר ובריא – זה הזמן להנות מתוספות שיער בלי לסבול מכאבים ובלי לגרום לשיער נזקים מיותרים!</h4>

<br />
<h4 className="h44 colorgraydarker fw100 w50">שיטת התפירה החדשנית נחשבת לאחת השיטות המתקדמות והחדשות בתחום תוספות השיער. בשיטה זו לוקחים תוספות שיער ותופסים אותן אחת אחת לשיער הצמוד לקרקפת, באמצעות תפירה מקצועית שאינה מכאיבה כלל..</h4>


        </div>
        <div className=" margintop flexrowtocol bet w100">
        
            <div className="w400">
                <h1 className="h4 h44">לא לקחת סיכון בשום אופן -תוספות שיער ללא נזק</h1>   
                        <br />
                        <h4 className="h44 fw100">חולמת על תוספות שיער אך חוששת מהנזק שהן יכולות לגרום לשיער? צודקת בהחלט. אין שום סיבה לסבול מנזקים כשרוצים ליהנות מיופי ולכן תוספות שיער ללא נזק בשיטת התפירה מחייבות מיומנות רבה ובכך אנו מתמחים. אנשי המקצוע שלנו מרכיבים את תוספות השיער בשיטה אורגנית - בתפירה, ללא צמות, ללא הדבקה וללא הלחמה. השיטה הזו הוכיחה את עצמה כמוצלחת ביותר מבחינת תוצאות וגם מבחינת השמירה על השיער הטבעי.והתוצאות? תוספות שיער טבעיות בשיטה אורגנית המקנה מראה טבעי, שופע, מלא ובריא של שיער. השיטה לא כואבת – לא מרגישים אותה כלל ואחת לשלושה חודשים יש לבצע הרמה של התוספת. את התוספת ניתן לצבע, לעשות פסים, בייביליס ולהתייחס לתוספת כאל שיער טבעי לכל דבר.</h4>


            </div>
    <div className="smallImage w50 "></div>

        </div>
        
     
     
     
     
     
    </div>
  );
}

export default HairExtraComp;
