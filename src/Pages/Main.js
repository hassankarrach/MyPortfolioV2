import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import locomotiveScroll from "locomotive-scroll";
//importSections
import {SkillsTitles,Header,About,Skills,SectionTitle,WorksContainer,Footer} from '../Components/index'
import Navbar from '../Components/Navbar/Navbar'
//FramerMotion
import { motion } from 'framer-motion'
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Main() {
//   const refScroll = useRef(null);
//   let lscroll;

// useEffect(() => {
//     lscroll = new locomotiveScroll({
//       el: refScroll.current,
//       smooth: true,
//       getDirection: true, // display scoll direction (up & down)
//       lerp: 0.01, //scroll smoothness
//       reloadOnContextChange: true,
//       inertia: 0.3,
//       smartphone: {
//         lerp: 0.5,
//         smooth: true, //smooth scroll enabled for mobile
//       },
//       tablet: {
//         lerp: 0.5,
//         smooth: true, //smooth scroll enabled for tablet & ipad
//       },
//       useKeyboard: true,
//       multiplier: 1,
//       firefoxMultiplier: 50,
//       touchMultiplier: 2,
//       scrollFromAnywhere: false,
//     });

//     // Use Locomotive Scroll with ScrollTrigger
//     lscroll.on("scroll", ScrollTrigger.update);
//     ScrollTrigger.scrollerProxy(refScroll.current, {
//       scrollTop(value) {
//         return arguments.length ? lscroll.scrollTo(value, 0, 0) : lscroll.scroll.instance.scroll.y;
//       }, 
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       pinType: refScroll.current.style.transform ? "transform" : "fixed"
//     });
// },[]);
const refScroll = useRef(null);

useEffect(()=>{
  const Container = refScroll.current;
},[])
  return (
    <motion.div
    id='main-container'
    initial ={{opacity:0}}
    animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
    exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
    >
        <Navbar/>
        <Header/>
        <SkillsTitles/>
        <About/>
        <SectionTitle text='Skills'/>
        <Skills/>
        <SectionTitle text='Featured Projects'/>
        <WorksContainer/>
        <Footer/>
    </motion.div>
  )
}

export default Main