import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import "../../css/contactpage.css";
import Autoplay from "../carusela/AutoPlay";

function ContactComp(props) {
  return (
    <div className="flexrow flexrowtocolrevers bet">
      <div className="w30 gridcols">
        <div className="headerH1 ">
          <h1 className="headerArchev ">
            108 GREENWICH STREET 3RD FLOOR NEW YORK, NY 10006 646.912.9335
          </h1>
        </div>
        <div className="infosmall">
          <h4 className="h4small">VISIT US</h4>
          <p className="pargraph">Tuesday to Friday 10am-8pm</p>
          <p className="pargraph">Saturday 10am-6pm</p>
        </div>
        <div className="kavr"></div>

        <div className="mapShowing">
          <div className="map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width={"100%"}
                  height="200"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=%D7%99%D7%A4%D7%AA%2047&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w70   ">
        <div className="formdiv w100 flexcol center">
          <form  onSubmit={props.sendemail.handleSubmit} action="" className="form w100 flexcol ">
            <label className="lable" htmlFor="name">Name</label>
            <div className="flexrow w100">
              <div className="flexcol w50 marginbottom20contact">
                <input values={props.sendemail.values.name}
            onChange={props.sendemail.handleChange}  name="name" className="input" type="text" />
                <label className="smalllable" htmlFor="name">Name</label>
              </div>
              <div className="flexcol w50 margleft marginbottom20contact">
                <input values={props.sendemail.values.lastname}
            onChange={props.sendemail.handleChange}  name="lastname" className="input " type="text" />
                <label className="smalllable" htmlFor="name">Last Name</label>
              </div>
            </div>
            <label className="lable" htmlFor="name">Phone</label>
            <input values={props.sendemail.values.phone}
            onChange={props.sendemail.handleChange}  name="phone" className="input marginbottom20contact" type="text" />
            <label className="lable" htmlFor="name">E-Mail</label>
            <input values={props.sendemail.values.email}
            onChange={props.sendemail.handleChange}  name="email" className="input marginbottom20contact" type="text" />
{props.loader.msg}
{props.loader.Loader
 ? 
  <button  className="buttons w30">loading wait ...</button>:
  <button type="submit" className="buttons w30">submit</button>
}
          
          </form>
        </div>
        <br /><br />
        <div className="carusel  ">
          <Autoplay/>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
