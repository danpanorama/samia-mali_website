import { useDispatch, useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
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
import ContactComp from "../components/contact/ContactComp";
import { useState } from "react";
import {useFormik} from "formik"
import { sendSMS } from "../Redux/Actions/SendSMS";

function ContactScreen() {
  const dispatch = useDispatch();
  const loader = useSelector((state)=>  state.Loader)
 

  const sendemail = useFormik({
    initialValues:{
    name:"",
    lastname:"",
    email:'',
    phone:0,
    
  },onSubmit:async values  => {
    try{

  dispatch(sendSMS(values));


    
    }catch(e){
      console.log(e)
    }
  }});


  return (
    <div className="padd">
     
     
     <div className="paddingpage">
     <ContactComp  loader={loader} sendemail={sendemail}/>
     
     </div>
     
     
    </div>
  );
}

export default ContactScreen;
