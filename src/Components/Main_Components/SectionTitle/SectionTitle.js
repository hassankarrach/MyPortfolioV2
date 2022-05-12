import React from 'react'
import styled from 'styled-components'

function SectionTitle({bg, color}) {
  return (
    <StyledSectionTitle bg={bg} color={color} data-scroll-section>SectionTitle</StyledSectionTitle>
  )
}

const StyledSectionTitle = styled.div`
   height : 150px;
   display : flex;
   align-items : center;
   justify-content : center;
   color :white;
   background-color : ${props => props.bg==='d'? '#10101a' : props.bg==='l'? '#f5f0ec' :'' };
   color : ${props => props.color==='d'? '#10101a' : props.color==='l'? '#f5f0ec' :'' };
   `

export default SectionTitle