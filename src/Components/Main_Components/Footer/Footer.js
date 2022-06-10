import React from 'react'
import styled from 'styled-components'
import Morocco from '../../../Media/Logo/Morocco.png'

function Footer() {
  return (
    <StyledFooter data-scroll-section>
      <h2>© 2022 | Made with ❤️ in&nbsp;&nbsp;<img height='22px' width='22px' alt='morocco flag' className='Morocco' src={Morocco}/></h2>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
 height : auto;
 display : flex;
 justify-content :center;
 align-items : flex-end;
 h2{
   color : white;
   font-family : var(--font-tertiary);
   display : flex;
   justify-content :center;
   align-items : center;
   margin-bottom : 15px;
   font-size : 23px;

   .Morocco{
     height : 22px;
   }
 }
`

export default Footer