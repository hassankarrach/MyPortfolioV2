import React, {useEffect} from 'react'
import styled from 'styled-components'

//Gsap
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionTitle({bg, color, text}) {
  useEffect(()=>{
    ScrollTrigger.batch(".TtleSectionAnimation", {
      interval: 0.1, 
      batchMax: 3,   
      onEnter: batch =>     gsap.to(batch,  {autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeave: batch =>     gsap.set(batch, {autoAlpha: 0, y: -100,             overwrite: true}),
      onEnterBack: batch => gsap.to(batch,  {autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, y: 100,              overwrite: true})
    });
  },[])
  return (
    <StyledSectionTitle bg={bg} color={color} data-scroll-section className='TtleSectionAnimation'>
      <h1>{text}</h1>
    </StyledSectionTitle>
  )
}

const StyledSectionTitle = styled.div`
  margin-bottom : 30px;

   h1{
    font-family: 'Lemon/Milk light', sans-serif;
    color :white;
     /* background-color : ${props => props.bg==='d'? '#10101a' : props.bg==='l'? '#f5f0ec' :'' };
     color : ${props => props.color==='d'? '#10101a' : props.color==='l'? '#f5f0ec' :'' }; */
     width : 100%;
     display : flex;
     align-items : center;
     justify-content : center;
     overflow : hidden;
     font-size : 2.5rem;
     padding : 20px;
     @media(max-width: 768px){
       font-size : 1.9rem;
     }
   }

   h1:before,
   h1:after {
    background: linear-gradient(236deg, rgba(16,16,26,1) 0%, rgba(32,32,52,1) 100%);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
   }
   h1:before {
    right: 0.5em;
    margin-left: -50%;
    background: linear-gradient(214deg, rgba(32,32,52,1) 0%, rgba(16,16,26,1) 100%);
   }
   h1:after {
    left: 0.5em;
    margin-right: -50%;
   }
   `

export default SectionTitle