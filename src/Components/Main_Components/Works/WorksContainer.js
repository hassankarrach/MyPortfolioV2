import React from 'react'
import styled from 'styled-components'
import DevWorks from './DevWorks'
import DesignWorks from './DesignWorks'

function WorksContainer() {
  return (
    <StyledContainer data-scroll-section>
         <div className='TopDark'>
           <DevWorks/>
         </div>
         <div className='Lighter'>
         </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
    display : flex;
    flex-direction : column;
    height : 1000px;

    .TopDark{
      height : 20%;
      background-color : var(--bg);
      display : flex;
    flex-direction : column;
    align-items:center;
    }
    .Lighter{
      height : 80%;
      background-color : var(--White-Color);
    }
`

export default WorksContainer