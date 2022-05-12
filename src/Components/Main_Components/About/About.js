import React from 'react'
import styled from '@emotion/styled'

function About() {
  return (
    <StyledAbout data-scroll-section>
      <div className='left'></div>
      <div className='right'>
        <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h1>
      </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
display: flex;
flex-direction : row;
align-items : center;
justify-content : space-between;
position : relative;




.left {
  width : 40%;
  height : 350px;
  background : linear-gradient(90deg, rgba(16,16,26,0) 0%, rgba(16,16,26,1) 100%), url('https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80');
  background-position : center;
  background-size : cover;
}

.right {
  position :absolute;
  width :60%;
  margin-left : 30%;


  h1{
    color : white;
    font-family : 'Montserrat';
    font-size : 1.2rem;
    opacity : 0.7;
  }
}


@media (max-width :768px){
  flex-direction : column;
  justify-content : initial;
  align-items : initial;


  .left{
    width : 100%;
    background :  linear-gradient(180deg, rgba(16,16,26,0) 0%, rgba(16,16,26,1) 100%),url('https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80');
  }

  .right{
    width : 100%;
    margin-left : 0px;
    padding : 10px;
    bottom : 0;


    h1{
      font-size : 1rem;
      text-align : left;
    }
  }
}
`

export default About