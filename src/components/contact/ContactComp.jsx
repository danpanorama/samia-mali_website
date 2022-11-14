import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/contactpage.css";


function ContactComp() {
  return (
    <div className="flexrow">
      <div className="w30 gridcols">
        <div className="headerH1 ">
          <h1 className="headerArchev ">
            108 GREENWICH STREET 3RD FLOOR NEW YORK, NY 10006 646.912.9335
          </h1>
        </div>
        <div className="infosmall">
          <h4 className="h4small">VISIT US</h4>
          <p className="pargraph">
            Tuesday to Friday 10am-8pm 
          </p>
          <p className="pargraph">
             Saturday 10am-6pm
          </p>
        </div>
        <div className="kavr"></div>

        <div className="mapShowing">
          <div className="map">
          <div class="mapouter"><div class="gmap_canvas"><iframe width={'100%'} height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=%D7%99%D7%A4%D7%AA%2047&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" 
          scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div></div>
          </div>
        </div>
      </div>
      <div className="w50">
        <div className="formdiv flexcol center">
            <form action="" className="form flexcol ">
            <div className="flexrow">
            <label htmlFor="name">Name</label>
                <input className="input" type="text" />
                <label htmlFor="name">Last Name</label>
                <input className="input" type="text" />
            </div>
                <label htmlFor="name">Phone</label>
                <input className="input" type="text" />
                <label htmlFor="name">E-Mail</label>
                <input className="input" type="text" />

                <button>submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;