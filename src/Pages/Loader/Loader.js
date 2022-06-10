import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import Logo from '../../Media/Logo/logoWhite.png'

function Loader() {
  return (
    <motion.div
    exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
    >
    <StyledLoader>
      <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
      className="left"
      >
             <img className='Logo' src={Logo} alt="Hassan Karrach Logo" />

      </motion.div>

      <motion.div
             initial={{ x: 10, opacity: 0 }}
             animate={{ x: 0, opacity: 1,  duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
             className="right"
             >
             <p className="text">HASSAN KARRACH</p>
             <p className="text">BLOCKCHAIN DEVELOPER</p>
             <p className="text">FULL STACK WEB DEVELOPER</p>
             <p className="text">GRAPHIC DESIGNER</p>
      </motion.div>
    </StyledLoader>
    </motion.div>
  )
}

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #10101a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display :flex;
  justify-content :center;
  align-items :center;
  color : white;
  display: flex;
  align-items: center;
  justify-content: center;

  .left {
    display : flex;
    margin-left: 5rem;
    justify-content : center;
    align-items : center;

    @media (max-width :768px){
      margin-left: 0rem;
      margin-left: 1rem;
    }
  }

  .right {
    margin-left: 1rem;
    height: 2rem;
    overflow: hidden;
    position: relative;
    @media (max-width :768px){
      margin-left : 0.5rem;
    }

    &::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        to bottom,
        #10101a 5%,
        rgba(#10101a, 0) 30%
      );
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    &::after {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        to top,
        #10101a 5%,
        rgba(#10101a, 0) 30%
      );
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  .text {
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.19em;
    color: white;
    animation: preloaderTextAnim 4s linear;
    animation-delay: 1s;

    @media (max-width :768px){
      font-size : 13px;
      display : none;
    }
  }

.Logo{
  width : 30px;

  @media (max-width : 768px){
    -webkit-animation: flickerAnimation 2s infinite;
   -moz-animation: flickerAnimation 2s infinite;
   -o-animation: flickerAnimation 2s infinite;
    animation: flickerAnimation 2s infinite;
  }
}

@keyframes preloaderTextAnim {
  0% {
    transform: translateY(0%);
  }
   100% {
    transform: translateY(-350%);
  }
}


@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
`

export default Loader