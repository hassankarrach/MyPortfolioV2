import React, { useEffect, useRef } from "react";
import Cover from '../Media/Header/Header1.png';
import SpinText from '../Media/Header/SpinText.png'
import locomotiveScroll from "locomotive-scroll";
import styled from 'styled-components'

//importSections
import {SkillsTitles,About,Skills,SectionTitle,WorksContainer,Footer} from '../Components/index'
import DesignWorks from '../Components/Main_Components/Works/DesignWorks'

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Main() {
  const refScroll = useRef(null);
  const SpinRef   = useRef(null);

  let lscroll;
useEffect(() => {
    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.65,
      inertia: 0.3,
      tablet: {
        breakpoint: 0,    // <---- Fixes The Issue 🎉
      }
    });

    // Use Locomotive Scroll with ScrollTrigger
    lscroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(refScroll.current, {
      scrollTop(value) {
        return arguments.length ? lscroll.scrollTo(value, 0, 0) : lscroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: refScroll.current.style.transform ? "transform" : "fixed"
    });
},[]);




useEffect(()=>{
  const el = SpinRef.current;
  const Scroller = refScroll.current;
  
  gsap.to(el, 
    {
      scrollTrigger : {
        trigger : el,
        scroller: Scroller,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      rotation:360,
      ease: "none"
    }
    )
},[])

  return (
    <div ref={refScroll} data-scroll-container>
        <StyledHeader data-scroll-section>
            <div className="Left">
               <div className='Info'>
                   <h3>Hi, My name is </h3>
                   <h1>HASSAN KARRACH</h1>
               </div>
            </div>
            <div className="Right">
            <div className='IconHolder'>
               <img src={SpinText} className='spinText' ref={SpinRef}/>
               <svg className="icon" viewBox="0 0 24 48" xmlns="http://www.w3.org/2000/svg">
               <path d="M16 24V0L0 24H8V48L24 24H16Z"/>
               </svg>
             </div>
            </div>
        </StyledHeader>
        <About/>
        <Skills/>
        <WorksContainer/>
    </div>
  )
}


export const StyledHeader = styled.div`
    height: 100vh;
    display:flex;
    align-items : center;

    @media (max-width : 768px) {
    }


    .Left{
    color : var(--White-Color);
    background-color : var(--Bg);
    height :100%;
    display : flex;
    flex-direction :column;

    .Info{
      position :absolute;
      left : 15%;
      top :35%;
      @media (max-width : 768px) {
      left : 3%;
      top :40%;
    }
        h3, h1{
        font-family: 'Lemon/Milk light', sans-serif;
        font-size: 40px;
        margin-bottom : 5px;
        @media (max-width : 768px) {
          font-size: 30px;
        }
        }

        h1{
        font-size: 60px;
        @media (max-width : 768px) {
          font-size: 50px;
          line-height: 95%;
        }
        }
    }
    }


    .Right{
    background-image : url(${Cover});
    background-position :center;
    background-size : cover;
    background-repeat : no-repeat;
    height :70%;
    width :70%;
    margin-left : auto;

    @media (max-width : 768px) {
        height:100%;
        width :100%;
    }

    .IconHolder{
        position : absolute;
        display : flex;
        bottom : 51px;

        .icon{
            width :25px;
            position : absolute;
            left: 0; 
            right: 0; 
            margin-left: auto; 
            margin-right: auto; 
            top: 50%;
            transform: translateY(-50%);
            fill: white;
        }
        
        .spinText{
            width : 180px;
            height :180px;
        }

    }
    }    
`

export default Main