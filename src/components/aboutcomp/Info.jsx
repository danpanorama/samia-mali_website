import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/sliderg.css";


function Info() {
  return (
    <div className=" info">
        <h1 className="h1 colorgraydarker">where we are</h1>

      <div className="padding20 flexrowtocol h100" >
        <div className="imageplace w50 h100">
            <p className="sometextstyle">YEFET 48 TEL-AVIV</p>
        </div>
        <div className="someWord h100 w50">
          <p className="colorgray ttrans h4">
            Our mission is to provide you with forward-thinking, sophisticated
            style. Our space, designed by Italian architect Matias Sagaria, is
            filled with linear balance and injects our inspiration with
            modernity and purity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
