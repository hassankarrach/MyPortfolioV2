import React from 'react'
import styled from 'styled-components'

//media
import Project1Gif from '../../../Media/Projects/Project1.gif'
import Project1 from '../../../Media/Projects/Project1.jpg'
import Project2Gif from '../../../Media/Projects/Project2.gif'
import Project2 from '../../../Media/Projects/Project2.jpg'


import {Portfolio,abundeez} from '../Skills/SkillsData'
//icons
import {FaRegEye,FaGithub,FaGithubSquare,FaWrench} from 'react-icons/fa'





const DevWorks = () => {
  return (
    <StyledDevWorks data-scroll-section>
         <div className='Container'>
             <DevWorkCard prv = {Project1} gif={Project1Gif} title='Wydad Website' desc='' techs={Portfolio} disabled/>
             <DevWorkCard prv = {Project2} gif={Project2Gif} title='Abundeez - NFT minting website' desc='' techs={abundeez}/>
             <DevWorkCard prv = {Project1} gif={Project1Gif} title='Portfolio v2.0' desc='' techs={Portfolio}/>
    
             <div className='GithubButtonHolder'>
             <div className='GithubButton'>
                 <div className='LeftButton'><FaGithub className='Icon_'/></div>
                 <div className='RightButton'>
                   <a href='https://www.github.com/hassankarrach' target='_blank'>
                     <button>Github</button>
                   </a>
                 </div>
             </div>
             </div>
         </div>
    </StyledDevWorks>
  )
}


const StyledDevWorks = styled.div`
width :100vw;
padding : 25px 0%;
display : flex;
justify-content : center;
align-items : center;
position : relative;

&:before{
      content: "";
      height :75%;
      width : 100%;
      background-color : var(--White-Color);
      position : absolute;
      bottom :0;
      z-index: -99; 
      @media (max-width : 768px){
      height :90%;
      }
}



.Container{
padding : 25px 3%;
width :82%;
border-radius : 10px;
background-color : #f9f4f0;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;



@media (max-width : 768px){
    width : 94%;
    border-radius : 5px;
}


.GithubButtonHolder{
.GithubButton{
    border-radius :5px;
    border : 1px solid #10101a;
    background-color : transparent;
    color : #10101a;
    display :flex;
    align-items:center;
    flex-direction : row;
    width : 170px;
    margin-left: auto;
    height :35px;
    margin-top : 40px;

    @media (max-width :768px){
        width : 100%;
    }

    .LeftButton{
        height : 100%;
        padding: 10px;
        border-right : 1px solid #10101a;
        background : #10101a;
        display :flex;
        justify-content :center;
        align-items : center;
        .Icon_{
            color : white;
        }
    }
    .RightButton{
        width : 100%;
        button{
        background-color :transparent;
        width : 100%;
        border : none;
        cursor: pointer;
        font-family: 'Lemon/Milk light', sans-serif;
        font-size : 1.1rem;
        }
    }
}
}
}

`


const DevWorkCard = ({prv,gif,disabled,title,desc,techs}) =>{
    return(
        <StyledDevWorkCard prv ={prv} gif={gif}>
            <div className='LeftDevWorkCard'>
            </div>
            <div className='RightDevWorkCard'>
                <h1>{title}<span className='Span'>{disabled? `(In developmenet)` :''}</span></h1>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                
                {
                    !disabled?
                    <>
                    <h3>Tech used :</h3>
                    <div className='List'>
                    {
                        techs.map((item ,key)=>{
                            return(
                                <div className='tag' key={key}>
                                    <h4>{item.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
                </>
                :''
                }

                <div className='Buttons'>
                   <a className='linkBut' href='https://www.github.com/hassankarrach' target='_blank'>
                     <button disabled={disabled? true:false} className={disabled? `disabled` :''}>View<FaRegEye className='InnerIcons'/></button>   
                   </a>
                   
                   <a className='linkBut' href='https://www.github.com/hassankarrach' target='_blank'>
                     <button disabled={disabled? true:false} className={disabled? `disabled` :''}>Source code <FaGithub className='InnerIcons'/></button>
                   </a>
                </div>
            </div>
        </StyledDevWorkCard>
    )
}

const StyledDevWorkCard = styled.div`
 width : 100%;
 display : flex;
 margin-bottom : 10px;
 border-radius : 10px;
 position : relative;

 @keyframes anim-ss { 0% {background-position: 0%;} 100% {background-position: 100%;} }
 @media (max-width :768px){
     flex-direction : column;
     background: linear-gradient(180deg,#fffcfa 0%, rgba(255,250,246,0) 100%);

     border-left : 1px solid rgba(171,168,165,0.2);
     border-right : 1px solid rgba(171,168,165,0.2);

     margin-bottom : 40px;
 }

 .LeftDevWorkCard{
     width : 30%;
     height: 240px; 
     background-image : url(${props=>props.prv});
     background-position : center;
     background-size :cover;
     border-radius : 10px;
     border : 1px solid #d1d1d1;
     animation: anim-ss steps(23) 30s infinite;
     :hover{
     background-image : url(${props =>props.gif});
     }
     @media (max-width :768px){
        width : 100%;
        border-radius : 8px;
        border-bottom-left-radius : 0px;
        border-bottom-right-radius : 0px;
     }
 }

 .RightDevWorkCard{
     width : 70%;
     margin-left :40px;
     display : flex;
     flex-direction : column;
     @media (max-width :768px){
        width : 100%;
        margin-left :0px;
        margin-bottom : 10px;
     }

     h1{
        font-family: 'Lemon/Milk light', sans-serif;
        display : flex;
        flex-direction : center;
        align-items :center;

        @media (max-width :768px){
        text-align :center;
        }

        Span{
        font-family: 'Poppins';
        text-transform : uppercase;
        font-size : 1.2rem;
        margin : 10px;
        }
     }
     h3{
        font-family: 'Lemon/Milk light', sans-serif;
        margin-bottom : 10px;
        color :#1f1f31;
        @media (max-width :768px){
        text-align :center;
        }
     }
     p{
        font-family: 'Poppins';
        font-size : 1.2rem;
        margin-bottom : 25px;
        @media (max-width :768px){
        text-align :center;
        }
     }

     .List{
        display : grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows   : auto;
        justify-content: left;
        grid-row-gap : 10px;
        @media (max-width :768px){
        grid-template-columns: auto auto;
        margin-bottom : 20px;
        justify-content :center;
        }
         .tag{
         background-color : #ece7e3;
         padding :5px 10px;
         border-radius : 5px;
         margin-right : 15px;
         @media (max-width :768px){
            border-radius : 4px;
         }
         h4{
            font-family: 'Poppins';
            color : #a09d9a;
            @media (max-width :768px){
                font-size : 15px;
            }
         }
         }
     }
     .Buttons{
         margin-left: auto;
         margin-top: auto;
         margin-top :15px;
         display :flex;
         flex-direction : row;


         @media (max-width :768px){
            width : 100%;
            margin-left: 0;
            margin-top: 0;
            justify-content :center;

            position :absolute;
            bottom : -15px;
        }
         
         .linkBut{
         text-decoration : none;
         

         .disabled{
            cursor: not-allowed;
            color : #797774;
         }
         button{
         font-family: 'Lemon/Milk light', sans-serif;
         padding : 5px 10px;
         border-radius :5px;
         border : 1px solid rgba(160,157,154, 0.4);
         background-color : transparent;
         color : #10101a;
         font-size : 1rem;
         display :flex;
         justify-content : center;
         align-items:center;
         flex-direction : row;
         cursor: pointer;
         .InnerIcons{
             margin-left :5px;
         }
         }
         button:first-child {
             margin-right : 6px;
         }
         }
         
     }
 }
`

export default DevWorks