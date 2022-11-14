import { useDispatch, useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
import HomeOpenImage from "../components/homecomp/HomeOpenImage";
import Service from "../components/homecomp/Service";
import TexturaComp from "../components/homecomp/TexturaComp";
import FullImage from "../components/homecomp/FullImage";
function HomeScreen() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="home">
      <HomeOpenImage offsetY={offsetY} />

      <div
        style={{ transform: `translate3d(0, -${offsetY * 0.3}px,0)` }}
        className="   bcw w100"
      >
        <div className="paddingpage">
          <Service offsetY={offsetY} />
          <TexturaComp />
        </div>
        <FullImage />
        
      </div>
    </div>
  );
}

export default HomeScreen;
