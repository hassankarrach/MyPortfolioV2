import React from 'react'
import styled from 'styled-components'

function SkillsTitles() {
  return (
    <StyledSkillsTitles data-scroll-section>
        <ul>
            <li>BLOCKCHAIN DEVELOPER</li>
            <li>FULL stack web developer</li>
            <li>Graphic designer</li>
        </ul>
    </StyledSkillsTitles>
  )
}

const StyledSkillsTitles = styled.div` 
height : 100px;
display : flex;
justify-content : center;
align-items : center;
color : #1b1b2c;
font-family : 'Circular Std Book';
font-size : 4rem;
text-transform : uppercase;
ul{
    list-style : none;
    display : flex;
    flex-direction : row;
    overflow : hidden;
    white-space: nowrap;

    li{
        margin-right : 100px;
    }
}
`

export default SkillsTitles