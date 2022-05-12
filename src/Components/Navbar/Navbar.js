import React ,{useState, useContext} from 'react'
import styled from "styled-components"
import logoWhite from '../../Media/Logo/logoWhite.png'
import logo from '../../Media/Logo/logo.png'
//React Link
import {Link} from 'react-router-dom'
//FramerMotion
import { motion ,AnimatePresence } from "framer-motion"
import Fade from '@mui/material/Fade';




function Navbar() {
    const [toggle ,setToggle]= useState(false);

    return (
      <>
         <Nav>
            <Link to='/'>
            <Logo onClick={()=>{setToggle(false)}} src={logoWhite}
            ></Logo>
            </Link>
            <div onClick={()=>{setToggle(!toggle)}}
            id="nav-icon3"
            className={`${toggle ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </Nav>

                 <Fade in={toggle} timeout ={460}>
                       <StyledMenu>
                        <motion.div className='OverlayContent'>
                           <Link to=''>
                           <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1}}
                             >
                          <motion.a
                          onClick={()=>{setToggle(false)}}
                          whileHover={{color : '#00dfb5'}}
                          
                          href='#'>Home</motion.a>
                             </motion.div>
                           </Link>
                           
                           <Link to='/About'>
                             <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1 }}
                             >
                             <motion.a
                              whileHover={{color:'#00dfb5'}}
                             href='#'>About Me
                             </motion.a>
                             </motion.div>
                           </Link>
                          
                          <Link to='Graphic-Design'>
                          <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1}}
                             >
                          <motion.a
                          onClick={()=>{setToggle(false)}}
                          whileHover={{color : '#00dfb5'}}
                          href='#'>Graphic Design</motion.a>
                          </motion.div>
                          </Link>
                          

                          <Link to='Developement'>
                          <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1}}
                             >
                          <motion.a
                          onClick={()=>{setToggle(false)}}
                          whileHover={{color : '#00dfb5'}}
                          href='#'>Coding</motion.a>
                          </motion.div>
                          </Link>

                        </motion.div>
                       </StyledMenu>
                  </Fade>
      </>
    )
}

 const Nav = styled.nav`
    height:55px;
    // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items:center;
    position: fixed;
    justify-content:space-between;
    padding:0px 9%;
    width: 100%;
    z-index: 999;

    @media(max-width : 768px){
    padding : 0 3%;
   }

    /* Icon 3 */
#nav-icon3{
  width: 40px;
  height:30px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  z-index : 999;
}
#nav-icon3 span{
    display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: white;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}


#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 13px;
}

#nav-icon3 span:nth-child(4) {
  top: 26px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  width: 0%;
  left: 50%;
}   

`

export const Logo = styled.img`
display: inline-block;
width : 33px;
height: 33px;
`
export const StyledMenu = styled.div`
  height: 100%;
  width : 100%;
  position :fixed;
  background: rgba( 255, 255, 255, 0.4 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3.5px );
-webkit-backdrop-filter: blur( 3.5px );
  z-index : 998;
  font-family: 'Nanum Gothic';

  


.OverlayContent{
  width:100%;
  height: 100%;
  display : flex;
  justify-content : center;
  flex-direction : column;
  align-items : center;
  div{
  margin-bottom : 30px
  }
}

.OverlayContent a{
  color : black;
  text-decoration :none;
  text-transform : uppercase;
  font-size: 25px;
}

ul li:hover ~ .Cursor{
  transform : scale(5);
}
`




export default Navbar
